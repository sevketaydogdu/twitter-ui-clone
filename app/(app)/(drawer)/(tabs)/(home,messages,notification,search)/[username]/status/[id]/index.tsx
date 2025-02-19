import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Post from '~/src/components/post';
import { dummyPosts } from '~/src/constants/dummyPosts';

const PostDetailScreen = () => {
  const { id } = useLocalSearchParams();

  // Find the post by ID
  const post = dummyPosts.find((p) => p.id === id);

  return (
    <>
      <Stack.Screen options={{ title: 'Post' }} />
      <ScrollView className="flex flex-1">
        <View className="flex-1 justify-between ">
          {post ? (
            <Post post={post} hasShownTopLine={false} />
          ) : (
            <Text className="dark:text-white">Post not found</Text>
          )}
        </View>
      </ScrollView>
      <View className="absolute bottom-0 bg-yellow-500">
        <Text className=" ">asd</Text>
      </View>
    </>
  );
};

export default PostDetailScreen;
