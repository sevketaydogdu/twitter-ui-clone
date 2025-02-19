import { Stack } from 'expo-router';
import React from 'react';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

const JobsScreen = () => {
  const { isMobile } = useBreakPoints();

  return (
    <>
      <Stack.Screen
        options={{
          headerBackVisible: !!isMobile,
          headerTitle: 'Jobs',
        }}
      />
      <BookmarksScreenInner />
    </>
  );
};

export default JobsScreen;
const BookmarksScreenInner = () => {
  return (
    <Container>
      <ScreenContent path="/JobsScreen.tsx" title="JobsScreen" />
    </Container>
  );
};
