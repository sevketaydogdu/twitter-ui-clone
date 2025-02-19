import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string | undefined;
}

export const Container = ({ children, className, style }: ContainerProps) => {
  return (
    <SafeAreaView className={className} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
