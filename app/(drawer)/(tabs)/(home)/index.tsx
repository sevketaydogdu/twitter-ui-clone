import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Post from '~/components/post';

export default function HomeScreen() {
  return (
    <>
      <Container>
        {/* <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" /> */}
        <Post
          post={{
            user: {
              avatar: 'https://i.pravatar.cc/300',
              name: 'aaaa',
            },
            content: 'asdasdasdas',
            image: undefined,
            comments: 2,
            likes: 4,
            shares: 1231,
            createdAt: '',
          }}
        />
        <Post
          post={{
            user: {
              avatar: 'https://i.pravatar.cc/300',
              name: 'aaaa',
            },
            content: 'asdasdasdas',
            image: undefined,
            comments: 2,
            likes: 4,
            shares: 1231,
            createdAt: '',
          }}
        />
      </Container>
    </>
  );
}
