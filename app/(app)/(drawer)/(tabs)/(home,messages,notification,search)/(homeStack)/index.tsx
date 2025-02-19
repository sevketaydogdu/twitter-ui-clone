import { useScrollToTop } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { Container } from '~/src/components/Container';
import Post from '~/src/components/post';
import { dummyPosts } from '~/src/constants/dummyPosts';

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
    <Container>
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
    </Container>
  );
}
