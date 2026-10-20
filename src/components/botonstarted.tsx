import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { Spacing } from '@/constants/theme';

type BotonStartedProps = {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function BotonStarted({
  title = 'Get Started',
  onPress,
  style,
}: BotonStartedProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#6552FE',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    borderRadius: Spacing.two,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});