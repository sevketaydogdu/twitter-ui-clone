import { Stack } from 'expo-router';
import React from 'react';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import HeaderBackButton from '~/src/components/ui/HeaderBackButton';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isWeb } from '~/src/platform/detection';

const VerifiedorgsScreen = () => {
  const { isMobile } = useBreakPoints();

  return (
    <>
      <Stack.Screen
        options={{
          headerBackVisible: !!isMobile,
          headerTitle: 'Verified Orgs',
          headerLeft: (props) => {
            return isWeb && isMobile ? <HeaderBackButton {...props} /> : undefined;
          },
        }}
      />
      <VerifiedorgsScreenInner />
    </>
  );
};

export default VerifiedorgsScreen;
const VerifiedorgsScreenInner = () => {
  return (
    <Container>
      <ScreenContent />
    </Container>
  );
};
