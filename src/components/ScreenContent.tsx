import { usePathname, useSegments } from 'expo-router';
import { ConstructionIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { interopIcon } from '~/src/helpers/interopIcon';

export const ScreenContent = () => {
  interopIcon(ConstructionIcon);
  const segment = useSegments();
  const pathname = usePathname();
  const description = 'If you want to continue of this project please write comment on twitter.';

  return (
    <View className={'  flex-1 justify-center  px-6 '}>
      <View className=" items-center  rounded-2xl bg-slate-100 px-6 py-12 dark:bg-slate-900">
        <ConstructionIcon className="color-black dark:color-white" size={100} />

        <Text className={'text-xl font-bold text-black dark:text-white'}>{pathname} Screen</Text>
        <View className={`mt-4 items-center rounded-md bg-slate-500 px-2 py-1 dark:bg-slate-700 `}>
          <Text className="text-center text-white">{segment}</Text>
        </View>
        {/* <EditScreenInfo path={segment + pathname} /> */}
        {/* <View className="mt-12 bg-red-50">{children}</View> */}
      </View>
      <Text className={'mt-5 px-6 text-center text-lg leading-6 dark:text-white'}>
        {description}
      </Text>
    </View>
  );
};
