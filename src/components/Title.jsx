import { StyleSheet, Text } from "react-native";

export default function Title({ style, children }) {
  return (
    <Text role='heading' aria-level={1} style={[style, styles.title]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 40,
    textAlign: 'center',
  },
});
