// import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { MenuIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { useCallback } from 'react';
import { Image } from 'react-native';

import PressableScale from './ui/PressableScale';

import { profilePhotoUri } from '~/constants/images';

const DrawerMenuButton = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  const _handlePressOpenDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, []);

  return (
    <PressableScale onPress={_handlePressOpenDrawer} style={{ padding: 12 }}>
      <Image
        source={{ uri: profilePhotoUri }}
        style={{ width: 32, height: 32, borderRadius: 16 }}
      />
      {/* <MenuIcon color={colorScheme === 'dark' ? 'white' : 'black'} size={22} /> */}
    </PressableScale>
  );
};

export default DrawerMenuButton;
