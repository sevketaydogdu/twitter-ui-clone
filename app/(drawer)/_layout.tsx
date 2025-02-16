import { Drawer } from 'expo-router/drawer';

import DrawerContent from '~/components/DrawerContent';

const DrawerLayout = () => (
  <Drawer initialRouteName="(tabs)" drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="(tabs)"
      options={{
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

export default DrawerLayout;
