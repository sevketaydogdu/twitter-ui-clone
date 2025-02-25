import { Link, Slot, Stack, Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useMemo } from 'react';
import { Image, Text, View } from 'react-native';

import XIcon from '~/assets/svg/xIcon';
import DrawerContent from '~/src/components/DrawerContent';
import { TabBarIcon } from '~/src/components/TabBarIcon';
import RightSideBar from '~/src/components/webOnly/RightSideBar';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isWeb } from '~/src/platform/detection';
export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const { isMobile, isCompact } = useBreakPoints();
  if (isWeb) {
    return (
      <View
        className={`${!isMobile && 'flex-row'} bg-background relative left-0 right-0  flex-1 justify-center`}>
        {!isMobile && (
          <View
            className={`${
              isCompact ? 'w-[98px] ' : ''
            } sticky top-0 h-screen  items-end border-r border-gray-500`}>
            <View className={`sticky ${isCompact ? 'w-[98px] p-2' : 'w-[275px] p-2'} h-full`}>
              <View className={`fixed ${isCompact ? 'w-[98px] p-2' : 'w-[275px] p-2'} h-full`}>
                <View className="  pl-3 pt-3">
                  {!isCompact && (
                    <Link href="/" className="flex-row    self-start">
                      <View className="  w-10 flex-row items-center ">
                        <XIcon fill={colorScheme === 'dark' ? 'white' : 'black'} />
                        {/* <Image
                    source={require('~/assets/icon.png')}
                    style={{
                      width: 110,
                      height: 40,
                    }}
                    resizeMode="cover"
                  /> */}
                      </View>
                    </Link>
                  )}
                </View>

                <View className="">
                  <DrawerContent />
                </View>

                {!isCompact && (
                  <>
                    <Link
                      href="https://twitter.com/intent/follow?screen_name=sevketaydogdu"
                      className="mt-8 flex-row items-center gap-2"
                      target="_blank">
                      <View className="relative flex-row items-center gap-3 pl-2">
                        <View className="relative">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_210_10)">
                              <path
                                d="M18.5808 0H5.41922C2.42627 0 0 2.4375 0 5.44431V18.5557C0 21.5625 2.42627 24 5.41922 24H18.5808C21.5737 24 24 21.5625 24 18.5557V5.44431C24 2.4375 21.5737 0 18.5808 0Z"
                                fill="black"
                              />
                              <path
                                d="M14.6962 7H16.3894L12.6905 11.2477L17.0419 17.0273H13.6345L10.9659 13.5223L7.91203 17.0273H6.21797L10.1742 12.4843L6 7H9.49359L11.9058 10.2041L14.6962 7ZM14.1019 16.0092H15.0403L8.98406 7.96492H7.97719L14.1019 16.0092Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_210_10">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </View>
                        <Text className="text-sm font-semibold text-slate-400">
                          Follow Sevket on 𝕏
                        </Text>
                      </View>
                    </Link>
                    <Link
                      href="https://medium.com/@sevketaydogdu34"
                      className="mt-2 flex-row items-center gap-2"
                      target="_blank">
                      <View className="relative flex-row items-center gap-3 pl-2">
                        <View className="relative">
                          <Image
                            source={{
                              uri: 'https://pbs.twimg.com/profile_images/3544660761/2e8f6be2ebb5d814bd567960a647638b_400x400.png',
                            }}
                            alt="Twitter"
                            className="h-6 w-6 rounded-full"
                          />
                          <View className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
                        </View>
                        <Text className="text-sm font-semibold text-slate-400">
                          Follow Sevket on Medium
                        </Text>
                      </View>
                    </Link>
                  </>
                )}
                {/* <View className="mt-8 gap-2">
                {!isCompact && (
                  <Text className="text-sm font-medium text-gray-500 px-3">Discover</Text>
                )}
                <SidebarItem
                  icon="search"
                  label="Following"
                  href="/(tabs)/(search)"
                  compact={isCompact}
                  isActive={segments[1] === 'two'}
                />
              </View> */}

                {/* {searchEntities.sections.map((section) => {
                if (section.id !== 'my_following') return null;
                return (
                  <View
                    key={section.id}
                    className="gap-3 rounded-2xl p-3 mt-4 mr-6"
                    style={{ backgroundColor: '#00000008' }}>
                    {!isCompact && <Text className="text-sm text-gray-500">{section.title}</Text>}
                    <View className="gap-3">
                      {getAllEntitiesForSection(section.id).map((entity: Entity) => (
                        <CategoryCard
                          key={entity.id}
                          title={entity.title}
                          logo={entity.logo}
                          icon={entity.icon}
                          id={entity.id}
                          entity_type={entity.type}
                          minimal={true}
                          disable_name={isCompact}
                        />
                      ))}
                    </View>
                  </View>
                );
              })} */}
              </View>
            </View>
          </View>
        )}
        <View
          // className={`bg-background h-full w-full max-w-[600px] flex-1   `}
          className={`bg-background h-full w-full max-w-[600px] flex-1 ${isMobile ? 'pb-0' : ''}`}
          //
        >
          {/* <Slot /> */}
          {/* {isWeb && isMobile ? <TabMenuRenderer /> : <Slot />} */}
          {isMobile ? <TabMenuRenderer /> : <Slot />}
        </View>
      </View>
    );
  }
  return <TabMenuRenderer />;
}

const TabMenuRenderer = () => {
  const iconFocuedColor = useMemo(() => '#d1d1d1', []);
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
        },
        // tabBarBackground: () => <BluredBackgroundFill />,
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="House" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: 'Search',
          headerStyle: false,
          headerSearchBarOptions: {
            placeholder: 'Saaaearch',
            autoFocus: true,
            inputType: 'text',
          },

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="Search" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
      <Tabs.Screen
        name="(notification)"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="Bell" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
      <Tabs.Screen
        name="(messages)"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="Mail" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
    </Tabs>
  );
};
