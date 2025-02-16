import { Feather } from '@expo/vector-icons';
// import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback } from 'react';

import PressableScale from './ui/PressableScale';

const DrawerMenuButton = () => {
  const navigation = useNavigation();
  const _handlePressOpenDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, []);

  return (
    <PressableScale onPress={_handlePressOpenDrawer} style={{ padding: 12 }}>
      <Feather name="menu" size={22} />
    </PressableScale>
  );
};

export default DrawerMenuButton;
