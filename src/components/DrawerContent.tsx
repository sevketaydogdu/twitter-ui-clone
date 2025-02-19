import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Href, Link, router, usePathname, useSegments } from 'expo-router';
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
  HomeIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  UserIcon,
  PlusCircle,
  MoonIcon,
  SunIcon,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { Container } from './Container';
import PressableScale from './ui/PressableScale';
import { interopIcon } from '../helpers/interopIcon';
import { useBreakPoints } from '../hooks/useBreakPoints';
import { isNative, isWeb } from '../platform/detection';

import { profilePhotoUri } from '~/src/constants/images';
const MobileDrawerMenuData = [
  {
    label: 'Profile',
    Icon: User,
    to: 'sevketaydogdu',
  },
  {
    label: 'Premium',
    Icon: BadgeCheckIcon,
    to: '(tabs)/premium',
  },
  {
    label: 'List',
    Icon: Users,
    to: '2sevketaydogdu',
  },
  {
    label: 'Bookmarks',
    Icon: Bookmark,
    to: '/bookmarks',
  },
  {
    label: 'Verified Orgs',
    Icon: Zap,
    to: '4sevketaydogdu',
  },
  {
    label: 'Monetization',
    Icon: Banknote,
    to: '5sevketaydogdu',
  },
  {
    label: 'Ads',
    Icon: SquareArrowUpRightIcon,
    to: '6sevketaydogdu',
  },
  {
    label: 'Jobs',
    Icon: BriefcaseBusiness,
    to: '/jobs',
  },
  {
    label: 'Settings and privacy',
    Icon: Settings,
    to: '8sevketaydogdu',
  },
  {
    label: 'Log out',
    Icon: LogOut,
    to: '9sevketaydogdu',
  },
];
const WebDrawerMenuData = [
  {
    label: 'Home',
    Icon: HomeIcon,
    to: '/',
  },
  {
    label: 'Explore',
    Icon: SearchIcon,
    to: 'search',
  },
  {
    label: 'Notifications',
    Icon: BellIcon,
    to: '/notifications',
  },
  {
    label: 'Messages',
    Icon: MailIcon,
    to: '(messages)/messages',
  },
  {
    label: 'Lists',
    Icon: BellIcon,
    to: '/lists',
  },
  {
    label: 'Bookmarks',
    Icon: Bookmark,
    to: '/bookmarks',
  },
  {
    label: 'Jobs',
    Icon: BriefcaseBusiness,
    to: '/jobs',
  },
  {
    label: 'Communities',
    Icon: Users,
    to: '2sevketaydogdu',
  },
  {
    label: 'Premium',
    Icon: BadgeCheckIcon,
    to: '(tabs)/premium',
  },
  {
    label: 'Verified Orgs',
    Icon: Zap,
    to: '4sevketaydogdu',
  },
  {
    label: 'Profile',
    Icon: UserIcon,
    to: '4sevketaydogdu',
  },
  {
    label: 'Log out',
    Icon: LogOut,
    to: '9sevketaydogdu',
  },
];
const DrawerContent = () =>
  // props?: DrawerContentComponentProps
  {
    const { isMobile, isCompact } = useBreakPoints();
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const handlePressProfile = useCallback(() => {
      router.push('/sevketaydogdu');
    }, []);
    interopIcon(SunIcon);
    interopIcon(MoonIcon);
    return (
      <DrawerContentScrollView>
        <Container className={isWeb ? '' : 'm-2'}>
          {isMobile && (
            <View>
              <PressableScale onPress={handlePressProfile}>
                <Image source={{ uri: profilePhotoUri }} className="h-14 w-14 rounded-full" />
              </PressableScale>
              <Pressable onPress={handlePressProfile}>
                <Text className="text-lg font-bold dark:color-white">Sevket Aydogdu</Text>
                <Text className="-mt-1 text-sm color-gray-500 ">@sevketayogdu</Text>
              </Pressable>
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
          )}

          <View className=" mt-4 gap-2">
            {!isMobile
              ? WebDrawerMenuData.map((item, index) => (
                  <DrawerItem
                    key={item.label}
                    colorScheme={colorScheme}
                    label={item.label}
                    Icon={item.Icon}
                    href={item.to as Href}
                  />
                ))
              : MobileDrawerMenuData.map((item, index) => (
                  <DrawerItem
                    key={item.label}
                    colorScheme={colorScheme}
                    label={item.label}
                    Icon={item.Icon}
                    href={item.to as Href}
                  />
                ))}
            {!isNative && (
              <PressableScale className="select-none">
                <View
                  className={`items-center justify-center rounded-full bg-blue-500 ${isCompact ? 'p-2' : 'px-4 py-2'}  dark:bg-white `}>
                  {isWeb && isCompact ? (
                    <PlusCircle size={22} color="black" />
                  ) : isMobile ? (
                    <Text
                      selectable={false}
                      className="text-lg font-bold color-white dark:color-black">
                      Post
                    </Text>
                  ) : (
                    <Text className="text-lg font-bold color-white dark:color-black">Post</Text>
                  )}
                </View>
              </PressableScale>
            )}
          </View>
        </Container>
        {colorScheme === 'dark' ? (
          <SunIcon onPress={() => toggleColorScheme()} className="color-black" />
        ) : (
          <MoonIcon onPress={() => toggleColorScheme()} className="color-black" />
        )}
      </DrawerContentScrollView>
    );
  };

export default DrawerContent;

const DrawerItem = forwardRef(
  (
    {
      label,
      Icon,
      colorScheme,
      href,
    }: {
      label: string;
      Icon: LucideIcon;
      href?: Href;
      colorScheme: 'light' | 'dark' | undefined;
    },
    ref: ForwardedRef<View>
  ) => {
    const { isCompact, isMobile } = useBreakPoints();
    const [isHovered, setIsHovered] = useState(false);
    // if (isCompact) {
    //   return (
    //     <PressableScale onHoverIn={() => setIsHovered(true)} onHoverOut={() => setIsHovered(false)}>
    //       <View
    //         className={` rounded-full  px-4 py-2 ${isHovered ? 'bg-gray-100 dark:bg-slate-900' : ''} flex-row items-center gap-4`}>
    //         <Icon size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
    //       </View>
    //     </PressableScale>
    //   );
    // }

    return (
      <Link href={href as Href} asChild>
        <PressableScale
          ref={ref}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}>
          <View
            style={
              {
                // flexDirection: 'row',
              }
            }
            className={` rounded-full  px-4 py-2 ${isHovered ? 'bg-gray-100 dark:bg-slate-900' : ''} flex-row  items-center gap-4`}>
            <Icon size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
            {(!isCompact || isMobile) && (
              <Text className="line-clamp-1 select-none text-lg font-bold dark:color-white">
                {label}
              </Text>
            )}
          </View>
        </PressableScale>
      </Link>
    );
  }
);
