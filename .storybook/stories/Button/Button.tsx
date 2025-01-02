import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'blue',
    borderRadius: 30,
  },
  text: { color: 'white' },
});
