import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback } from 'react';
import { Image } from 'react-native';

import { useBreakPoints } from '../hooks/useBreakPoints';
// import useHaptics from '../hooks/useHaptics';
import useHaptics from '../hooks/useHaptics';
import { isWeb } from '../platform/detection';

import PressableScale from '~/src/components/ui/PressableScale';
import { profilePhotoUri } from '~/src/constants/images';

const DrawerMenuButton = () => {
  const navigation = useNavigation();
  const playHaptic = useHaptics();
  const { isMobile } = useBreakPoints();
  const _handlePressOpenDrawer = useCallback(() => {
    if (isMobile) {
      playHaptic('Light');
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  }, []);

  return (
    <PressableScale
      onPress={_handlePressOpenDrawer}
      style={{ padding: isWeb ? 16 : 0, cursor: 'auto' }}>
      <Image
        source={{ uri: profilePhotoUri }}
        style={{ width: 32, height: 32, borderRadius: 16 }}
      />
    </PressableScale>
  );
};

export default DrawerMenuButton;
