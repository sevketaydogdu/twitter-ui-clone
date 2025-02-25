import { useRootNavigationState, Redirect } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { ActivityIndicator, View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import XIcon from '~/assets/svg/xIcon';

export default function App() {
  const rootNavigationState = useRootNavigationState();
  const { colorScheme } = useColorScheme();

  if (!rootNavigationState?.key)
    return (
      <View className="flex-1 items-center justify-center  gap-6   ">
        <XIcon fill={colorScheme === 'light' ? '#000' : '#ffffff'} />
        <ActivityIndicator />
      </View>
    );

  return <Redirect href={'/(drawer)'} />;
}
