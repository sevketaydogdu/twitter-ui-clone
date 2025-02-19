import { useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useMemo } from 'react';

import DrawerContent from '~/src/components/DrawerContent';

const DrawerLayout = () => {
  const segments = useSegments();
  const isSwipeEnabled = useMemo(
    () =>
      segments[4] === '(homeStack)' ||
      segments[4] === '(searchStack)' ||
      segments[4] === '(notification)' ||
      segments[4] === '(messages)',
    []
  );
  return (
    <Drawer initialRouteName="(tabs)" drawerContent={(props) => <DrawerContent />}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          swipeEnabled: isSwipeEnabled,
          drawerPosition: 'left',
          headerShown: false,
          // headerTitle: 'Tabs',
          // drawerLabel: 'Tabs',
          // drawerIcon: ({ size, color }) => (
          //   <MaterialIcons name="border-bottom" size={size} color={color} />
          // ),
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <HeaderButton />
          //   </Link>
          // ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
