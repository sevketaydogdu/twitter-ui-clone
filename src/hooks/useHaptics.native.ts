import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import React from 'react';
import { Platform } from 'react-native';

export default function useHaptics() {
  return React.useCallback((strength: 'Light' | 'Medium' | 'Heavy' = 'Medium') => {
    const style = Platform.OS === 'ios' ? ImpactFeedbackStyle[strength] : ImpactFeedbackStyle.Light;
    impactAsync(style);
  }, []);
}
