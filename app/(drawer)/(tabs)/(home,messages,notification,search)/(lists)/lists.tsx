import { Stack } from 'expo-router';
import React from 'react';

import { Container } from '~/src/components/Container';
import DrawerMenuButton from '~/src/components/DrawerMenuButton';
import { ScreenContent } from '~/src/components/ScreenContent';
import HeaderBackButton from '~/src/components/ui/HeaderBackButton';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isWeb } from '~/src/platform/detection';

const ListsScreen = () => {
  const { isMobile } = useBreakPoints();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: (props) => {
            return isWeb && isMobile ? <HeaderBackButton {...props} /> : undefined;
          },
          headerTitle: 'Lists',
        }}
      />
      <ListsScreenInner />
    </>
  );
};

export default ListsScreen;
const ListsScreenInner = () => {
  return (
    <Container>
      <ScreenContent />
    </Container>
  );
};
