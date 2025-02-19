import { Stack } from 'expo-router';

import { Container } from '~/src/components/Container';
import { ScreenContent } from '~/src/components/ScreenContent';
import DrawerMenuButton from '~/src/components/drawerMenuButton';
import { useBreakPoints } from '~/src/hooks/useBreakPoints';

export default function Home() {
  const { isMobile } = useBreakPoints();
  return (
    <>
      <Stack.Screen
        options={{
          // headerleft
          headerLeft: () => (isMobile ? <DrawerMenuButton /> : undefined),
          headerTitle: 'Notification',
        }}
      />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/notifications.tsx" title="notifications" />
      </Container>
    </>
  );
}
