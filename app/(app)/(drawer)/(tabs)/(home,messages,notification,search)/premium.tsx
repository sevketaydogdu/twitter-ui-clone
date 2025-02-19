import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { Container } from '~/src/components/Container';
import DrawerMenuButton from '~/src/components/drawerMenuButton';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

const PremiumScreen = () => {
  const { isMobile } = useBreakPoints();

  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Stack.Screen
          options={{
            title: 'Premium',

            headerBackVisible: !!isMobile,
          }}
        />
        <Text className="dark:text-white">PremiumScreen</Text>
      </View>
    </Container>
  );
};

export default PremiumScreen;
