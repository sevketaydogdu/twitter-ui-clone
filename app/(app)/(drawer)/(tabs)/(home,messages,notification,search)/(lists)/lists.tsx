import { Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

const ListsScreen = () => {
  const { isMobile } = useBreakPoints();

  return (
    <>
      <Stack.Screen
        options={{
          headerBackVisible: !!isMobile,
          headerTitle: 'Lists',
        }}
      />
      <Text className="dark:bg-red-50" />
      <ListsScreenInner />
    </>
  );
};

export default ListsScreen;
const ListsScreenInner = () => {
  return (
    <Container>
      <ScreenContent path="/ListsScreen.tsx" title="ListsScreen" />
    </Container>
  );
};
