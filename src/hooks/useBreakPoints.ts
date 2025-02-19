import { useWindowDimensions } from 'react-native';

const useBreakPoints = () => {
  const { width } = useWindowDimensions();
  const isCompact = width < 1024;
  const isMobile = width < 768;

  return { isCompact, isMobile };
};

export { useBreakPoints };
