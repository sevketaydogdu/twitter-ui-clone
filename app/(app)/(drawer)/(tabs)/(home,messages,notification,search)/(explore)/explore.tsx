import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { Container } from '~/src/components/Container';

const ExploreScreen = () => {
  return (
    <Container>
      <Stack.Screen
        options={{
          title: 'Explore',
        }}
      />
      <Text className="dark:text-white">ExploreScreen</Text>
    </Container>
  );
};

export default ExploreScreen;
