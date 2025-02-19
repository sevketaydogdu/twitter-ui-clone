import { Stack } from 'expo-router';
import { SearchIcon } from 'lucide-react-native';
import { useCallback, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Animated, { SlideInUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from '~/src/components/Container';
import { interopIcon } from '~/src/helpers/interopIcon';

export default function SearchScreen() {
  const inputRef = useRef<TextInput>(null);
  const { top } = useSafeAreaInsets();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  interopIcon(SearchIcon);
  const toggleFocus = useCallback(() => setIsFocused((prev) => !prev), [setIsFocused]);
  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <View
              className="flex-row items-center justify-center gap-4  p-2"
              style={{ paddingTop: top <= 0 ? 16 : top }}>
              <Pressable
                onPress={(e) => {
                  e.preventDefault();
                  inputRef.current?.focus();
                }}
                className=" flex-1 border-red-500 ">
                <View>
                  {/*  */}
                  <View
                    className="flex-row items-center justify-center rounded-full border-none bg-slate-100  focus-within:border-none focus-within:outline-none
                  dark:bg-slate-800">
                    {!isFocused && !inputValue && (
                      <View className="self-center ">
                        <SearchIcon className="color-slate-900 dark:color-white" size={16} />
                      </View>
                    )}
                    <TextInput
                      ref={inputRef}
                      placeholder="Search"
                      value={inputValue}
                      onChangeText={setInputValue}
                      className={`${isFocused && inputValue ? 'flex-1 ' : ''} place-content-start rounded-full px-4 py-3   placeholder:font-normal placeholder:color-slate-500  dark:color-white dark:placeholder:text-white`}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </View>
                </View>
              </Pressable>
              {isFocused && (
                <Pressable
                  className="self-center justify-self-center"
                  onPress={() => {
                    inputRef.current?.blur();
                    setIsFocused((prev) => !prev);
                  }}>
                  <Text className="color-black dark:color-white">Cancel</Text>
                </Pressable>
              )}
            </View>
          ),
        }}
      />

      {isFocused ? (
        <AutoComplete isFocused={isFocused} />
      ) : (
        <SearchScreenInner inputRef={inputRef} toggleFocus={toggleFocus} />
      )}
    </>
  );
}
const AutoComplete = ({ isFocused }: { isFocused: boolean }) => {
  if (isFocused)
    return (
      <Animated.View
        entering={SlideInUp.springify(200).damping(50)}
        style={{ flex: 1, zIndex: 999 }}>
        <Container className="h-full w-full items-center bg-red-300">
          <Text className=" text-2xl font-bold dark:color-white">AutoComplete screen</Text>
        </Container>
      </Animated.View>
    );
  return null;
};
const SearchScreenInner = ({
  inputRef,
  toggleFocus,
}: {
  inputRef: React.RefObject<TextInput>;
  toggleFocus: () => void;
}) => {
  return (
    <Container>
      <Text className="self-center text-2xl font-bold dark:text-white">Search Screen</Text>
    </Container>
  );
};
