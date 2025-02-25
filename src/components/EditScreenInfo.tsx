import { ConstructionIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { interopIcon } from '~/src/helpers/interopIcon';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description = 'If you want to continue of this project please write comment on twitter.';
  interopIcon(ConstructionIcon);
  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>{title}</Text>
        <View className={`rounded-md bg-gray-200 px-2 py-1 dark:bg-gray-700`}>
          <Text className="dark:text-white">{path}</Text>
        </View>
        <Text className={styles.getStartedText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = {
  getStartedContainer: `items-center mx-12`,
  codeHighlightContainer: `bg-red-500`,
  getStartedText: `text-lg leading-6 text-center dark:text-white mt-5`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
};
