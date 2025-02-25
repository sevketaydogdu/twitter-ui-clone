import { useScrollToTop } from '@react-navigation/native';
import Head from 'expo-router/head';
import { useColorScheme } from 'nativewind';
import React, { useRef, useState } from 'react';
import { FlatList, ActivityIndicator, View, Text, ScrollView, Platform } from 'react-native';

import Post from '~/src/components/post';
import { dummyPosts } from '~/src/constants/dummyPosts';
import { isWeb } from '~/src/platform/detection';

export default function HomeScreen() {
  const [data, setData] = useState(dummyPosts.slice(0, 15)); // Initial data (first 5 posts)
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  useScrollToTop(ref);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newPosts = dummyPosts.slice(data.length, data.length + 15); // Load next 5 posts
      setData((prevData) => [...prevData, ...newPosts]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {isWeb && (
        <Head>
          <title>Home - Twitter Clone</title>
        </Head>
      )}
      <View className="flex-1">
        <View className="flex-1">
          <FlatList
            data={data}
            ref={ref}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 140 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => <Post post={item} hasShownTopLine={index === 0} />}
            onEndReached={loadMore}
            onEndReachedThreshold={2}
            ListFooterComponent={
              loading ? (
                <ActivityIndicator
                  style={{
                    paddingVertical: 24,
                  }}
                  size="small"
                />
              ) : null
            }
          />
        </View>
      </View>
    </>
  );
}
