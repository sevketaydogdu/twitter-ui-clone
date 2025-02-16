import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Search() {
  return (
    <>
      {/* <Stack.Screen options={{ title: 'Tab Two' }} /> */}
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/Search.tsx" title="Search" />
      </Container>
    </>
  );
}
