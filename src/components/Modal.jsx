import { StyleSheet, View } from "react-native";

export default function Modal({ style, children }) {
  return (
    <View style={[style, styles.modal]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#242427',
    width: '68%',
    height: '74%',
    borderRadius: 32,
  },
});
