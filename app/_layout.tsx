import '../global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  return (
    <Wrappers>
      <Slot />
    </Wrappers>
  );
}

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style={'auto'} />

      <ThemeProvider
        value={
          colorScheme.colorScheme === 'light'
            ? {
                ...DefaultTheme,
                colors: {
                  ...DefaultTheme.colors,
                  background: '#fff',
                  card: '#fff',
                  border: '#d1d1d1',
                  text: '#000',
                },
              }
            : {
                ...DarkTheme,
                colors: {
                  ...DarkTheme.colors,
                  background: '#000',
                  card: '#000',
                  border: '#000',
                  text: '#fff',
                },
              }
        }>
        <View className=" flex-1 bg-white dark:bg-black">{children}</View>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
