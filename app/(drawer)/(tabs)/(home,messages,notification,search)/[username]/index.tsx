import { Redirect, useLocalSearchParams } from 'expo-router';
import { Calendar, MapPin } from 'lucide-react-native';
import React, { useCallback, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
} from 'react-native';

import { dummyProfiles } from '~/src/constants/dummyProfiles';
import { interopIcon } from '~/src/helpers/interopIcon';

import HomeScreen from '../(homeStack)';

const { width } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('screen');

// Interfaces
interface Profile {
  username: string;
  realName: string;
  bio: string;
  avatar: string;
  bannerImage?: string;
  location?: string;
  followers: number;
  following: number;
  posts: number;
  joinDate: string;
}

interface ProfileHeaderProps {
  profile: Profile;
}

interface TabBarProps {
  scrollX: Animated.Value;
  onTabPress: (index: number) => void;
}

type TabComponentProps = object;

const ProfileScreen: React.FC = () => {
  const { username } = useLocalSearchParams<{ username: string }>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeTab, setActiveTab] = useState(0);

  const profile = React.useMemo(() => {
    return dummyProfiles?.find((user) => user.username === username);
  }, [username]);

  const onTabPress = useCallback((index: number) => {
    if (Platform.OS === 'web') {
      setActiveTab(index);
    }
    scrollViewRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  }, []);
  const handleMomentumScrollEnd = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
    setActiveTab(newIndex);
  }, []);

  if (!profile) {
    return (
      <View className="flex flex-1 items-center justify-center p-4">
        <Text className="text-xl font-bold dark:text-white">This account doesn’t exist</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <ScrollView stickyHeaderIndices={[1]} nestedScrollEnabled>
        <ProfileHeader profile={profile} />
        <TabBar scrollX={scrollX} onTabPress={onTabPress} />

        {Platform.OS === 'web' ? (
          // Web: Regular container
          <View className="w-full">
            <TabContent activeTab={activeTab} />
          </View>
        ) : (
          // Native: Horizontal scroll
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            scrollEventThrottle={16}
            onMomentumScrollEnd={handleMomentumScrollEnd}>
            <TabContent activeTab={activeTab} />
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
const TabBar: React.FC<TabBarProps> = React.memo(({ scrollX, onTabPress }) => {
  const tabs = ['Posts', 'Replies', 'Media', 'Likes'] as const;

  return (
    <View className="flex-row border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-black">
      {tabs.map((tab, index) => {
        const opacity = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });

        const borderWidth = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0, 2, 0],
          extrapolate: 'clamp',
        });

        return (
          <TouchableOpacity
            key={tab}
            className="flex-1"
            onPress={() => onTabPress(index)}
            style={{ width: Platform.OS === 'web' ? '25%' : undefined }}>
            <Animated.View
              style={{
                opacity,
                borderBottomWidth: borderWidth,
                borderBottomColor: '#1DA1F2',
              }}>
              <Text className="py-4 text-center font-medium text-gray-900 dark:text-white">
                {tab}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});
TabBar.displayName = 'TabBar';

const ProfileHeader: React.FC<ProfileHeaderProps> = React.memo(({ profile }) => {
  interopIcon(Calendar);
  return (
    <>
      <View className="relative">
        {/* <View className="h-12 flex-row items-center px-4">
        <ArrowLeft className="h-5 w-5 text-black dark:text-white" />
        <View className="ml-6">
          <Text className="text-xl font-bold dark:text-white">{profile.realName}</Text>
          <Text className="text-sm text-gray-500">{profile.posts} posts</Text>
        </View>
      </View> */}

        <Image
          source={{ uri: profile.bannerImage || 'https://via.placeholder.com/600x200' }}
          className="h-40 w-full bg-gray-300"
        />

        <View className="absolute -bottom-16 left-4">
          <Image
            source={{ uri: profile.avatar }}
            className="h-24 w-24 rounded-full border-4 border-white bg-white dark:border-black"
          />
        </View>

        <View className="absolute bottom-2 right-4">
          <TouchableOpacity className="rounded-full border border-gray-200 bg-black px-4 py-2">
            <Text className="font-bold text-white">Follow</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-16 px-4">
        <Text className="text-xl font-bold dark:text-white">{profile.realName}</Text>
        <Text className="text-gray-500">@{profile.username}</Text>
        <Text className="mt-3 dark:text-white">{profile.bio}</Text>

        <View className="mt-3 flex-row items-center space-x-4">
          {profile.location && (
            <View className="flex-row items-center">
              <MapPin className="mr-1 h-4 w-4 text-gray-500" />
              <Text className="text-gray-500">{profile.location}</Text>
            </View>
          )}
          <View className="flex-row items-center">
            <Calendar className="mr-1    color-gray-500" size={16} />
            <Text className="text-sm text-gray-500">Joined {profile.joinDate}</Text>
          </View>
        </View>

        <View className="mt-3 flex-row space-x-4">
          <TouchableOpacity className="flex-row items-center">
            <Text className="font-bold dark:text-white">{profile.following}</Text>
            <Text className="ml-1 text-gray-500">Following</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <Text className="font-bold dark:text-white">{profile.followers}</Text>
            <Text className="ml-1 text-gray-500">Followers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
});
ProfileHeader.displayName = 'ProfileHeader';
const TabContent: React.FC<{ activeTab: number }> = React.memo(({ activeTab }) => {
  console.log(
    '🚀 ~ constTabContent:React.FC<{activeTab:number}>=React.memo ~ activeTab:',
    activeTab
  );
  return Platform.OS === 'web' ? (
    // Web: Stack tabs vertically with display property
    <>
      <View style={{ display: activeTab === 0 ? 'flex' : 'none' }}>
        <PostsTab />
      </View>
      <View style={{ display: activeTab === 1 ? 'flex' : 'none' }}>
        <RepliesTab />
      </View>
      <View style={{ display: activeTab === 2 ? 'flex' : 'none' }}>
        <MediaTab />
      </View>
      <View style={{ display: activeTab === 3 ? 'flex' : 'none' }}>
        <LikesTab />
      </View>
    </>
  ) : (
    // Native: Horizontal layout
    <>
      <View style={{ width: screenWidth }}>{activeTab === 0 && <PostsTab />}</View>
      <View style={{ width: screenWidth }}>{activeTab === 1 && <RepliesTab />}</View>
      <View style={{ width: screenWidth }}>{activeTab === 2 && <MediaTab />}</View>
      <View style={{ width: screenWidth }}>{activeTab === 3 && <LikesTab />}</View>
    </>
  );
});
const PostsTab: React.FC<TabComponentProps> = React.memo(() => {
  return (
    <View className=" min-h-screen">
      <HomeScreen />
    </View>
  );
});

const RepliesTab: React.FC<TabComponentProps> = React.memo(() => (
  <View className="min-h-screen  ">
    <Text className="text-gray-500">Replies Content</Text>
  </View>
));

const MediaTab: React.FC<TabComponentProps> = React.memo(() => (
  <View className="min-h-screen ">
    <Text className="text-gray-500">Media Content</Text>
  </View>
));

const LikesTab: React.FC<TabComponentProps> = React.memo(() => {
  return (
    <View className="min-h-screen ">
      <Text className="text-gray-500">Likes Content</Text>
    </View>
  );
});

TabContent.displayName = 'TabContent';
PostsTab.displayName = 'PostsTab';
RepliesTab.displayName = 'RepliesTab';
MediaTab.displayName = 'MediaTab';
LikesTab.displayName = 'LikesTab';
