import { Stack } from 'expo-router';
import React from 'react';

import { Container } from '~/src/components/Container';
import DrawerMenuButton from '~/src/components/DrawerMenuButton';
import { ScreenContent } from '~/src/components/ScreenContent';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isWeb } from '~/src/platform/detection';

const MessagesScreen = () => {
  const { isMobile } = useBreakPoints();
  return (
    <>
      <Stack.Screen
        options={{
          // headerleft
          headerLeft: () => (isWeb && isMobile ? <DrawerMenuButton /> : undefined),
          headerTitle: 'Messages',
        }}
      />
      <MessagesScreenInner />
    </>
  );
};

export default MessagesScreen;
const MessagesScreenInner = () => {
  return (
    <Container>
      <ScreenContent />
    </Container>
  );
};
