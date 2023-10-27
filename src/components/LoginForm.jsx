import { StyleSheet, View } from "react-native";

export default function LoginForm({ style, children }) {
  return (
    <View style={[style, styles.form]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#242427',
    width: '68%',
    height: '74%',
    borderRadius: 32,
  },
});
