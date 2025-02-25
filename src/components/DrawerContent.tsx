import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Href, Link, router, useSegments } from 'expo-router';
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
  Plus,
  MoonIcon,
  SunIcon,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { profilePhotoUri } from '~/src/constants/images';
import { interopIcon } from '~/src/helpers/interopIcon';

import { useBreakPoints } from '../hooks/useBreakPoints';
import { isNative, isWeb } from '../platform/detection';

import { Container } from './Container';
import PressableScale from './ui/PressableScale';
interface DrawerItemProps {
  label: string;
  Icon: LucideIcon;
  href?: Href;
  colorScheme: 'light' | 'dark' | undefined;
  isCompact: boolean;
  isMobile: boolean;
}
const DrawerMenuData = [
  { label: 'Home', Icon: HomeIcon, to: '/', platforms: ['web'] },
  { label: 'Explore', Icon: SearchIcon, to: 'search', platforms: ['web'] },
  { label: 'Messages', Icon: MailIcon, to: '(messages)/messages', platforms: ['web'] },
  { label: 'Notifications', Icon: BellIcon, to: '/notifications', platforms: ['web'] },
  { label: 'Profile', Icon: User, to: 'sevketaydogdu', platforms: ['mobile', 'web'] },
  { label: 'Premium', Icon: BadgeCheckIcon, to: '(tabs)/premium', platforms: ['mobile', 'web'] },
  { label: 'List', Icon: Users, to: '/lists/', platforms: ['mobile'] },
  { label: 'Bookmarks', Icon: Bookmark, to: '/bookmarks', platforms: ['mobile', 'web'] },
  { label: 'Verified Orgs', Icon: Zap, to: '/verifiedorgs', platforms: ['mobile', 'web'] },
  { label: 'Monetization', Icon: Banknote, to: '/monetization', platforms: ['mobile'] },
  { label: 'Ads', Icon: SquareArrowUpRightIcon, to: '/ads', platforms: ['mobile'] },
  { label: 'Jobs', Icon: BriefcaseBusiness, to: '/jobs', platforms: ['mobile', 'web'] },
  { label: 'Settings and privacy', Icon: Settings, to: '/settings', platforms: ['mobile'] },
  { label: 'Lists', Icon: BellIcon, to: '/lists', platforms: ['web'] },
  { label: 'Communities', Icon: Users, to: 'communities', platforms: ['web'] },
  { label: 'Log out', Icon: LogOut, to: '/', platforms: ['mobile', 'web'] },
];

const webOrder = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Lists',
  'Bookmarks',
  'Jobs',
  'Communities',
  'Premium',
  'Verified Orgs',
  'Profile',
  'Log out',
];

const mobileOrder = [
  'Profile',
  'Premium',
  'List',
  'Bookmarks',
  'Verified Orgs',
  'Monetization',
  'Ads',
  'Jobs',
  'Settings and privacy',
  'Log out',
];

const DrawerContent = () => {
  const { isMobile, isCompact } = useBreakPoints();
  const { colorScheme, setColorScheme } = useColorScheme();
  const segment = useSegments();
  const handlePressProfile = useCallback(() => {
    router.push('/sevketaydogdu');
  }, []);

  const handlePressToggleColorScheme = useCallback(() => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }, [colorScheme, setColorScheme]);

  const orderedMenuData = DrawerMenuData.filter((item) =>
    item.platforms.includes(isMobile ? 'mobile' : 'web')
  ).sort((a, b) => {
    const order = isMobile ? mobileOrder : webOrder;
    return order.indexOf(a.label) - order.indexOf(b.label);
  });

  return (
    <DrawerContentScrollView>
      <Container className={isWeb ? '' : 'm-2'}>
        {isMobile && <MobileProfileSection onPressProfile={handlePressProfile} />}
        <MenuSection
          menuData={orderedMenuData}
          colorScheme={colorScheme}
          isCompact={isCompact}
          isMobile={isMobile}
        />
        {!isNative && <PostButton isCompact={isCompact} isMobile={isMobile} />}
      </Container>
      <ToggleColorSchemeButton colorScheme={colorScheme} onPress={handlePressToggleColorScheme} />
    </DrawerContentScrollView>
  );
};

const MobileProfileSection = ({ onPressProfile }: { onPressProfile: () => void }) => (
  <View>
    <PressableScale onPress={onPressProfile}>
      <Image source={{ uri: profilePhotoUri }} className="h-14 w-14 rounded-full" />
    </PressableScale>
    <Pressable onPress={onPressProfile}>
      <Text className="text-lg font-bold dark:color-white">Sevket Aydogdu</Text>
      <Text className="-mt-1 text-sm color-gray-500 ">@sevketayogdu</Text>
    </Pressable>
    <View className="flex-row flex-wrap gap-6">
      <Text className="mt-4 font-bold dark:color-white">
        275 <Text className="font-normal color-gray-500"> Following</Text>
      </Text>
      <Text className="mt-4 font-bold dark:color-white">
        31 <Text className="font-normal color-gray-500"> Followers</Text>
      </Text>
    </View>
    <Text className="font-bold dark:color-white">
      1 <Text className="font-normal color-gray-500"> Subscription</Text>
    </Text>
  </View>
);

const MenuSection = ({
  menuData,
  colorScheme,
  isCompact,
  isMobile,
}: {
  menuData: typeof DrawerMenuData;
  colorScheme: 'light' | 'dark' | undefined;
  isCompact: boolean;
  isMobile: boolean;
}) => (
  <View className="mt-4 gap-2">
    {menuData.map((item) => (
      <DrawerItem
        key={item.label}
        colorScheme={colorScheme}
        label={item.label}
        Icon={item.Icon}
        href={item.to as Href}
        isCompact={isCompact}
        isMobile={isMobile}
      />
    ))}
  </View>
);

const PostButton = ({ isCompact, isMobile }: { isCompact: boolean; isMobile: boolean }) => {
  interopIcon(Plus);
  return (
    <PressableScale className="select-none">
      <View
        className={`items-center justify-center rounded-full bg-blue-500 ${
          isCompact ? 'p-2' : 'px-4 py-2'
        } dark:bg-white`}>
        {isWeb && isCompact ? (
          <Plus size={22} className="color-white" />
        ) : (
          <Text className="text-lg font-bold color-white dark:color-black">Post</Text>
        )}
      </View>
    </PressableScale>
  );
};

const ToggleColorSchemeButton = ({
  colorScheme,
  onPress,
}: {
  colorScheme: 'light' | 'dark' | undefined;
  onPress: () => void;
}) => (
  <Pressable className="self-start p-6" onPress={onPress}>
    {colorScheme === 'dark' ? <SunIcon color={'#fff'} /> : <MoonIcon color={'#000'} />}
  </Pressable>
);

const DrawerItem = forwardRef(
  (
    { label, Icon, colorScheme, href, isCompact, isMobile }: DrawerItemProps,
    ref: ForwardedRef<View>
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Link href={href as Href} asChild>
        <PressableScale
          ref={ref}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}>
          <View
            className={`rounded-full px-4 py-2 ${
              isHovered ? 'bg-gray-100 dark:bg-slate-900' : ''
            } flex-row items-center gap-4`}>
            <Icon size={22} color={colorScheme === 'dark' ? '#fff' : '#000'} />
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
DrawerItem.displayName = 'DrawerItem';

export default DrawerContent;
