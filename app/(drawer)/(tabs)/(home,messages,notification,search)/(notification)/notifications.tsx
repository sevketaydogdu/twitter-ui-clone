import { Stack } from 'expo-router';

import { Container } from '~/src/components/Container';
import DrawerMenuButton from '~/src/components/DrawerMenuButton';
import { ScreenContent } from '~/src/components/ScreenContent';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';
import { isWeb } from '~/src/platform/detection';

export default function Home() {
  const { isMobile } = useBreakPoints();
  return (
    <>
      <Stack.Screen
        options={{
          // headerleft
          headerLeft: () => (isWeb && isMobile ? <DrawerMenuButton /> : undefined),
          headerTitle: 'Notification',
        }}
      />
      <Container>
        <ScreenContent />
      </Container>
    </>
  );
}
