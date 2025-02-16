import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);
// export const MaterialTopTabs = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator>(
//   Navigator
// );
const MaterialTopTabsLayout = () => {
  // const segments = useSegments();

  // const isSwipable =
  //   segments[5] === '(homeScreen)' || segments[2] === 'messages';
  return (
    <MaterialTopTabs
      initialRouteName="index"
      // tabBar={() => null}
      screenOptions={{
        lazy: true,
        tabBarScrollEnabled: Platform.select({ ios: true, android: true, web: false }),
        tabBarItemStyle: {
          //   backgroundColor: 'red',
        },
        // tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          //   color: 'red',
          fontWeight: '600',
        },
      }}>
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: 'For You',
        }}
      />
      <MaterialTopTabs.Screen
        name="following"
        options={{
          title: 'Following',
        }}
      />
    </MaterialTopTabs>
  );
};

export default MaterialTopTabsLayout;
