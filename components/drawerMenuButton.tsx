import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback } from 'react';
import { Image } from 'react-native';

import PressableScale from '~/components/ui/PressableScale';
import { profilePhotoUri } from '~/constants/images';

const DrawerMenuButton = () => {
  const navigation = useNavigation();
  const _handlePressOpenDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, []);

  return (
    <PressableScale onPress={_handlePressOpenDrawer} style={{ padding: 12 }}>
      <Image
        source={{ uri: profilePhotoUri }}
        style={{ width: 32, height: 32, borderRadius: 16 }}
      />
    </PressableScale>
  );
};

export default DrawerMenuButton;
