import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/two.tsx" title="Tab tree" />
      </Container>
    </>
  );
}
