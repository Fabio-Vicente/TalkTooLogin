import { useContext, useState } from "react";
import { ActivityIndicator, Image, Pressable, StyleSheet, Text } from "react-native";
import context from "../context";
import { signIn as googleSignIn, signOut as googleSignOut } from '../auth/googleAuth';
import RobotoFontFamily from '../../assets/fonts/Roboto-Medium.ttf';
import GoogleIcon from '../../assets/icons/Google.svg';
import { useFonts } from "expo-font";

export default function AuthButton ({ buttonStyle }) {
  useFonts({
    Roboto: RobotoFontFamily,
  });

  const { setLoggedUser, setAuthError } = useContext(context)

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAuth = async () => {
    setIsAuthenticating(true);
    try {
      setLoggedUser((await googleSignIn()).displayName);
    } catch (error) {
      setAuthError($`Error on authentication: ${error.providerId}`)
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    isAuthenticating
      ? <ActivityIndicator size="large" style={buttonStyle} />
      : (
      <Pressable onPress={handleAuth} style={[buttonStyle, styles.button]}>
        <Image source={GoogleIcon} style={styles.icon} />
        <Text style={styles.Text}>Continue with Google</Text>
      </Pressable>
      )
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 22,
    borderRadius: 35,
  },
  icon: {
    width: 18,
    height: 18,
  },
  Text: {
    color: '#121218',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 500,
  },
});
