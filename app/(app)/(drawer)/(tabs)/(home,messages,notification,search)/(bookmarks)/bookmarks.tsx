import { Stack } from 'expo-router';
import React from 'react';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

const BookmarksScreen = () => {
  const { isMobile } = useBreakPoints();

  return (
    <>
      <Stack.Screen
        options={{
          // headerleft
          headerBackVisible: !!isMobile,
          headerTitle: 'Bookmarks',
        }}
      />
      <BookmarksScreenInner />
    </>
  );
};

export default BookmarksScreen;
const BookmarksScreenInner = () => {
  return (
    <Container>
      <ScreenContent path="/BookmarksScreen.tsx" title="BookmarksScreen" />
    </Container>
  );
};
