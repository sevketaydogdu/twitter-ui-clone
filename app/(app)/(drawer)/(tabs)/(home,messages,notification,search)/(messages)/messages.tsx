import { Stack } from 'expo-router';
import React from 'react';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import DrawerMenuButton from '~/src/components/drawerMenuButton';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

const MessagesScreen = () => {
  const { isMobile } = useBreakPoints();
  return (
    <>
      <Stack.Screen
        options={{
          // headerleft
          headerLeft: () => (isMobile ? <DrawerMenuButton /> : undefined),
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
      <ScreenContent path="/messages.tsx" title="Messages" />
    </Container>
  );
};
