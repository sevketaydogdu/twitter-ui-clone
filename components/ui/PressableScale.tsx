import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View, StyleSheet } from 'react-native';

interface PressableScaleProps extends PressableProps {
  children: ReactNode;
}

const PressableScale = ({ children, ...props }: PressableScaleProps) => {
  return (
    <Pressable {...props}>
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
