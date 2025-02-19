import { Slot, Tabs } from 'expo-router';
import { useMemo } from 'react';
import { View } from 'react-native';

import BluredBackgroundFill from '~/src/components/BluredBackgroundFill';
import { TabBarIcon } from '~/src/components/TabBarIcon';
import LeftSideBar from '~/src/components/webOnly/LeftSideBar';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isMobileWeb, isWeb } from '~/src/platform/detection';
console.log('🚀 ~ isMobileWeb:', isMobileWeb);

export default function TabLayout() {
  const { isMobile } = useBreakPoints();
  const mainContainerStyle = `${!isMobile && 'flex-row'} bg-background relative left-0 right-0  flex-1 justify-center`;
  if (isWeb) {
    return (
      <View className={mainContainerStyle}>
        <LeftSideBar />
        <View
          className={`bg-background h-full w-full max-w-[900px] flex-1   `}
          //
        >
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
