import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Bookmark,
  LucideIcon,
  User,
  Users,
  LogOut,
  Settings,
  BadgeCheckIcon,
  Zap,
  BriefcaseBusiness,
  Banknote,
  SquareArrowUpRightIcon,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { Container } from './Container';
import PressableScale from './ui/PressableScale';

import { profilePhotoUri } from '~/constants/images';
const DrawerMenuData = [
  {
    label: 'Profile',
    Icon: User,
  },
  {
    label: 'Premium',
    Icon: BadgeCheckIcon,
  },
  {
    label: 'List',
    Icon: Users,
  },
  {
    label: 'Bookmarks',
    Icon: Bookmark,
  },
  {
    label: 'Verified Orgs',
    Icon: Zap,
  },
  {
    label: 'Monetization',
    Icon: Banknote,
  },
  {
    label: 'Ads',
    Icon: SquareArrowUpRightIcon,
  },
  {
    label: 'Jobs',
    Icon: BriefcaseBusiness,
  },
  {
    label: 'Settings and privacy',
    Icon: Settings,
  },
  {
    label: 'Log out',
    Icon: LogOut,
  },
];
const DrawerContent = (props: DrawerContentComponentProps) => {
  const { colorScheme } = useColorScheme();
  return (
    <DrawerContentScrollView>
      <Container className="m-2">
        <View>
          <Image source={{ uri: profilePhotoUri }} className="h-14 w-14 rounded-full" />
          <Text className="text-lg font-bold dark:color-white">John Doe</Text>
          <Text className="-mt-1 text-sm color-gray-500 ">@johndoe</Text>
          <View className="flex-row flex-wrap gap-6">
            <Text className="mt-4  font-bold dark:color-white">
              275 <Text className="font-normal color-gray-500"> Following</Text>
            </Text>
            <Text className=" mt-4  font-bold dark:color-white">
              31 <Text className="font-normal color-gray-500"> Followers</Text>
            </Text>
          </View>
          <Text className="font-bold dark:color-white">
            1 <Text className="font-normal color-gray-500"> Subscription</Text>
          </Text>
        </View>
        <View className=" mt-4 gap-2">
          {DrawerMenuData.map((item, index) => (
            <DrawerItem
              key={item.label}
              colorScheme={colorScheme}
              label={item.label}
              Icon={item.Icon}
            />
          ))}
        </View>
      </Container>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const DrawerItem = ({
  label,
  Icon,
  colorScheme,
}: {
  label: string;
  Icon: LucideIcon;

  colorScheme: 'light' | 'dark' | undefined;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <PressableScale onHoverIn={() => setIsHovered(true)} onHoverOut={() => setIsHovered(false)}>
      <View
        className={`rounded-full  px-4 py-2 ${isHovered ? 'bg-gray-100 dark:bg-slate-900' : ''} flex-row items-center gap-4`}>
        <Icon size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
        <Text className="select-none text-lg font-bold dark:color-white">{label}</Text>
      </View>
    </PressableScale>
  );
};
