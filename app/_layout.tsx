import { DarkTheme, DefaultTheme, ThemeContext, ThemeProvider } from '@react-navigation/native';
import '../global.css';

import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
