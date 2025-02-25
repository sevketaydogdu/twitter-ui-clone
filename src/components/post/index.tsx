import { formatDistanceToNow } from 'date-fns';
import { Link } from 'expo-router';
import { Heart, MessageCircle, Repeat, Bookmark } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Pressable,
} from 'react-native';

import { interopIcon } from '~/src/helpers/interopIcon';

interface User {
  avatar: string;
  realName: string;
  userName: string;
}

export interface PostProps {
  hasShownTopLine: boolean;
  post: {
    id: string;
    user: User;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    createdAt: string;
  };
}

const Post: React.FC<PostProps> = ({ post, hasShownTopLine }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(post.likes);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const toggleLike = (e: GestureResponderEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const toggleBookmark = (e: GestureResponderEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setBookmarked(!bookmarked);
  };
  interopIcon(Bookmark);
  interopIcon(Heart);
  return (
    <Link
      href={`/${post.user.userName}/status/${post.id}`}
      asChild
      className="hover:bg-gray-50 dark:hover:bg-gray-950">
      <TouchableOpacity
        className={` group ${!hasShownTopLine ? 'border-t border-gray-300 dark:border-gray-700' : ''}  pb-2 pl-4 pr-4 pt-4`}>
        <View className="flex-row items-start gap-2">
          <Link href={`/${post.user.userName}`}>
            <View>
              <Image source={{ uri: post.user.avatar }} className="h-12  w-12 rounded-full " />
            </View>
          </Link>
          <View className="flex-1">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 flex-row items-center space-x-1">
                <Link
                  href={`/${post.user.userName}`}
                  className="line-clamp-1 flex flex-row items-center  ">
                  <Text
                    className=" line-clamp-1  font-semibold text-gray-900 dark:text-white"
                    numberOfLines={1}>
                    {post.user.realName}
                  </Text>
                  <Text
                    className="ml-2 line-clamp-1  flex-shrink text-gray-500 dark:text-gray-400"
                    numberOfLines={1}>
                    @{post.user.userName}
                  </Text>
                  <Text
                    className="ml-1 line-clamp-1 text-sm  text-gray-500 dark:text-gray-400"
                    numberOfLines={1}>
                    · {formatDistanceToNow(new Date(post.createdAt))} ago
                  </Text>
                  {/* <View className="line-clamp-1 flex flex-1 flex-row items-center ">
                    <Text
                      className=" line-clamp-1  font-semibold text-gray-900 dark:text-white"
                      numberOfLines={1}>
                      {post.user.realName}
                    </Text>
                    <Text
                      className="ml-2 line-clamp-1  flex-shrink text-gray-500 dark:text-gray-400"
                      numberOfLines={1}>
                      @{post.user.userName}
                    </Text>
                    <Text
                      className="ml-1 line-clamp-1 text-sm  text-gray-500 dark:text-gray-400"
                      numberOfLines={1}>
                      · {formatDistanceToNow(new Date(post.createdAt))} ago
                    </Text>
                  </View> */}
                </Link>
              </View>
            </View>
            <Text className="mt-1 text-gray-900 dark:text-gray-100">{post.content}</Text>
            {post.image && (
              <Image source={{ uri: post.image }} className="mt-2 h-60 w-full rounded-xl" />
            )}
            <View className="mt-2 flex-row items-center justify-between ">
              <TouchableOpacity
                onPress={toggleLike}
                className="aspect-square flex-row items-center space-x-1 rounded-full   ">
                <View className="rounded-full p-1  ">
                  <Heart
                    className={`${liked ? 'fill-red-500 color-red-500' : ' fill-none color-gray-400'} `}
                    size={18}
                  />
                </View>
                <Text className="text-gray-600 dark:text-gray-400">{likes}</Text>
              </TouchableOpacity>
              <View className="flex-row items-center space-x-1">
                <MessageCircle size={18} color="gray" />
                <Text className="text-gray-600 dark:text-gray-400">{post.comments}</Text>
              </View>
              <TouchableOpacity className="flex-row items-center space-x-1">
                <Repeat size={18} color="gray" />
                <Text className="text-gray-600 dark:text-gray-400">{post.shares}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleBookmark}>
                <Bookmark
                  size={18}
                  className={`${bookmarked ? ' fill-blue-400   color-blue-500' : ''}    fill-none color-gray-400`}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default Post;
