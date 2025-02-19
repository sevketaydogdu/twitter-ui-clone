import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';

const BluredBackgroundFill = () => {
  return <BlurView tint="prominent" intensity={100} style={StyleSheet.absoluteFill} />;
};

export default BluredBackgroundFill;
