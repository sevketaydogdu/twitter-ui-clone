import { NativeStackHeaderLeftProps } from '@react-navigation/native-stack';
import { router, useNavigation } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { memo, useCallback } from 'react';
import { Pressable } from 'react-native';

import { interopIcon } from '~/src/helpers/interopIcon';

const HeaderBackButton = (props: NativeStackHeaderLeftProps) => {
  interopIcon(ArrowLeft);
  const handleOnPressBack = useCallback(() => {
    if (props.canGoBack) {
      router.back();
    } else {
      router.navigate('/');
    }
  }, [props.canGoBack]);
  return (
    <Pressable onPress={handleOnPressBack} className="flex items-center p-3">
      <ArrowLeft className=" color-black dark:color-white" />
    </Pressable>
  );
};

export default memo(HeaderBackButton);
