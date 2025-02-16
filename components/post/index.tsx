import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Repeat, Bookmark } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface User {
  avatar: string;
  name: string;
}

interface PostProps {
  post: {
    user: User;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    createdAt: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(post.likes);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <View className="border-t border-gray-300 bg-white p-4">
      <View className="flex-row items-start">
        <Image source={{ uri: post.user.avatar }} className="mr-3 h-10 w-10 rounded-full" />
        <View className="flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-gray-900">{post.user.name}</Text>
            {post.createdAt && (
              <Text className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(post.createdAt))} ago
              </Text>
            )}
          </View>
          <Text className="my-2 text-gray-800">{post.content}</Text>
          {post.image && (
            <Image source={{ uri: post.image }} className="my-2 h-48 w-full rounded-xl" />
          )}
          <View className="mt-2 flex-row items-center justify-between">
            <TouchableOpacity onPress={toggleLike} className="flex-row items-center">
              <Heart size={20} color={liked ? 'red' : 'gray'} fill={liked ? 'red' : 'none'} />
              <Text className="ml-1 text-gray-600">{likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <MessageCircle size={20} color="gray" />
              <Text className="ml-1 text-gray-600">{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Repeat size={20} color="gray" />
              <Text className="ml-1 text-gray-600">{post.shares}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBookmark}>
              <Bookmark
                size={20}
                color={bookmarked ? 'blue' : 'gray'}
                fill={bookmarked ? 'blue' : 'none'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
