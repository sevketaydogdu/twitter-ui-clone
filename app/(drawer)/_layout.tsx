import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';

import DrawerContent from '~/components/DrawerContent';

const DrawerLayout = () => (
  <Drawer drawerContent={(props) => <DrawerContent {...props} />}>
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
