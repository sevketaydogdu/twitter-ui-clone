import { Tabs } from 'expo-router';
import { useMemo } from 'react';

import { TabBarIcon } from '~/components/TabBarIcon';
import DrawerMenuButton from '~/components/drawerMenuButton';

export default function TabLayout() {
  const iconFocuedColor = useMemo(() => '#d1d1d1', []);
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        // headerShown: true,
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerLeft: () => <DrawerMenuButton />,
        headerTitleAlign: 'center',
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerLeft: () => <DrawerMenuButton />,
          title: 'Home',

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="House" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
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
        name="(notification)/notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="Bell" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
      <Tabs.Screen
        name="(messages)/messages"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="Mail" color={color} fill={focused ? iconFocuedColor : ''} />
          ),
        }}
      />
    </Tabs>
  );
}
