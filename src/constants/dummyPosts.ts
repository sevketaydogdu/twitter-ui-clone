import { profilePhotoUri } from './images';

const basePosts = [
  {
    id: '1',
    user: {
      avatar: profilePhotoUri,
      realName: 'Sevket Aydogdu',
      userName: 'sevketaydogdu',
    },
    content: `Twitter UI clone with React Native, Expo, and Tailwind CSS! 🚀
💯 Expo Router Shared Routes
✅ Responsive design - Web & Mobile
✅ Dark/Light mode
✅ NativeWind
    `,
    image: profilePhotoUri,
    comments: 12,
    likes: 58,
    shares: 321,
    createdAt: '2025-02-16T11:56:06.641Z',
  },
  {
    id: '2',
    user: {
      avatar: 'https://i.pravatar.cc/300',
      realName: 'John Doe',
      userName: 'johndoe',
    },
    content: `Just started learning React Native! Excited to build my first app. Any tips?`,
    image: undefined,
    comments: 5,
    likes: 32,
    shares: 78,
    createdAt: '2025-02-15T14:30:10.120Z',
  },
  {
    id: '3',
    user: {
      avatar: 'https://i.pravatar.cc/300',
      realName: 'Jane Smith',
      userName: 'janesmith',
    },
    content: `Check out this cool sunset from my trip! 🌅`,
    image: 'https://loremflickr.com/320/240',
    comments: 24,
    likes: 120,
    shares: 980,
    createdAt: '2025-02-14T18:45:30.900Z',
  },
  {
    id: '4',
    user: {
      avatar: 'https://i.pravatar.cc/300',
      realName: 'Tech Insider',
      userName: 'techinsider',
    },
    content: `Apple just announced a new AI-powered feature for iPhones. Thoughts? 🍏🤖`,
    image: undefined,
    comments: 89,
    likes: 654,
    shares: 1200,
    createdAt: '2025-02-13T09:20:00.750Z',
  },
  {
    id: '5',
    user: {
      avatar: 'https://i.pravatar.cc/300',
      realName: 'Gaming Central',
      userName: 'gamingcentral',
    },
    content: `🎮 The new Elden Ring DLC is INSANE! Who's playing it?`,
    image: 'https://loremflickr.com/320/240',
    comments: 150,
    likes: 2050,
    shares: 8763,
    createdAt: '2025-02-12T22:10:45.641Z',
  },
  {
    id: '6',
    user: {
      avatar: 'https://i.pravatar.cc/300',
      realName: 'Crypto Guy',
      userName: 'cryptoguy',
    },
    content: `Bitcoin just hit $60K again! 🚀🚀 Is this the next bull run?`,
    image: undefined,
    comments: 45,
    likes: 780,
    shares: 4532,
    createdAt: '2025-02-11T17:05:30.123Z',
  },
];

export const dummyPosts = Array.from({ length: 50 }, (_, i) => {
  const baseIndex = i % basePosts.length;
  const post = {
    ...basePosts[baseIndex],
    id: (i + 1).toString(),
    createdAt: new Date(Date.now() - i * 60 * 60 * 1000).toISOString(),
  };

  // Slightly modify content for uniqueness
  post.content = post.content + ` #Post #${i + 1}`;
  post.likes = Math.floor(Math.random() * 2000); // Randomize likes count
  post.comments = Math.floor(Math.random() * 100); // Randomize comment count
  post.shares = Math.floor(Math.random() * 500); // Randomize share count

  return post;
});
