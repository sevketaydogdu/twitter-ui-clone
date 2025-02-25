import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Post from '~/src/components/post';
import HeaderBackButton from '~/src/components/ui/HeaderBackButton';
import { dummyPosts } from '~/src/constants/dummyPosts';

const PostDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const post = dummyPosts.find((p) => p.id === id);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Post',
          // headerLeft: () => <HeaderBackButton />,
        }}
      />
      <ScrollView className="flex flex-1">
        <View className="flex-1 justify-between ">
          {post ? (
            <Post post={post} hasShownTopLine={false} />
          ) : (
            <Text className="dark:text-white">Post not found</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default PostDetailScreen;
