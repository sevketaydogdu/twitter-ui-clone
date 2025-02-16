import React, { ReactNode, useCallback } from 'react';
import { Pressable, PressableProps, View, StyleSheet, GestureResponderEvent } from 'react-native';

import { useHaptics } from '~/hooks/useHaptics';

type OmitttedPressableProps = Omit<PressableProps, 'onPress'>;
interface PressableScaleProps extends OmitttedPressableProps {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const PressableScale = ({ children, onPress, ...props }: PressableScaleProps) => {
  const playHaptic = useHaptics();
  const handleOnPress = useCallback((e: GestureResponderEvent) => {
    if (onPress) {
      playHaptic('Light');
      onPress(e);
    }
  }, []);
  return (
    <Pressable {...props} onPress={handleOnPress}>
      {({ pressed }) => <View style={pressed ? styles.pressed : undefined}>{children}</View>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    transform: [{ scale: 0.98 }],
  },
});

export default PressableScale;
