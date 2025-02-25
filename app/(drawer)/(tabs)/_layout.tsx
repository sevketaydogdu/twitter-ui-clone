import { Slot, Tabs } from 'expo-router';
import { Home } from 'lucide-react-native';
import { useMemo } from 'react';
import { View } from 'react-native';

import BluredBackgroundFill from '~/src/components/BluredBackgroundFill';
import { TabBarIcon } from '~/src/components/TabBarIcon';
import LeftSideBar from '~/src/components/webOnly/LeftSideBar';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isMobileWeb, isWeb } from '~/src/platform/detection';
export default function TabLayout() {
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
