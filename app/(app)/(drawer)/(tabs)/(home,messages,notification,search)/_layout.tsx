import { Slot, Stack, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DrawerMenuButton from '~/src/components/drawerMenuButton';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

const DynamicLayout = ({ segment }: { segment: string }) => {
  const { username } = useGlobalSearchParams<{ username: string }>();
  const { isMobile } = useBreakPoints();
  const { top } = useSafeAreaInsets();
  if (segment === '(home)') {
    return (
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="(homeStack)"
          options={{
            // headerShown: !!isMobile,
            headerLeft: () => <DrawerMenuButton />,

            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="[username]/index"
          getId={({ params }) => params?.username}
          options={{
            title: username,
            // header: (props) => (
            //   <View
            //     className="h-12 flex-row items-center px-4 "
            //     style={{
            //       marginTop: top,
            //     }}>
            //     <ArrowLeft
            //       onPress={() => router.back()}
            //       className="h-5 w-5 text-black dark:text-white"
            //     />
            //     <View className="ml-6">
            //       <Text className="text-xl font-bold dark:text-white">
            //         {props.route.params?.username}
            //       </Text>
            //       {/* <Text className="text-sm text-gray-500">{profile.posts} posts</Text> */}
            //     </View>
            //   </View>
            // ),
          }}
        />
      </Stack>
    );
  }
  if (segment === '(search)') {
    return (
      <Stack initialRouteName="(searchStack)/search">
        <Stack.Screen name="(searchStack)/search" />
        <Stack.Screen
          name="[username]/index"
          getId={({ params }) => params?.username}
          options={{
            title: username,
          }}
        />
      </Stack>
    );
  }
  if (segment === '(notification)') {
    return (
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="(notification)/notifications" />
        <Stack.Screen
          name="[username]/index"
          getId={({ params }) => params?.username}
          options={{
            title: username,
          }}
        />
      </Stack>
    );
  }
  if (segment === '(messages)') {
    return (
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="(messages)/messages"
          options={{
            headerLeft: () => <DrawerMenuButton />,
            headerTitle: 'Messages',
          }}
        />
        <Stack.Screen
          name="[username]/index"
          getId={({ params }) => params?.username}
          options={{
            title: username,
          }}
        />
      </Stack>
    );
  }
  return <Slot />;
};

export default DynamicLayout;
