import { Modal, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import context from './src/context';
import AppProvider from './src/context/AppProvider';
import { LoginForm, SpriteSwipper, Title, GoogleAuthButton } from './src/components';
import InterFontFamily from './assets/fonts/Inter-VariableFont_slnt,wght.ttf';
import { signOut as signOutGoogle } from './src/auth/googleAuth';

export default function App() {
  useFonts({
    Inter: InterFontFamily,
  });

  return (
    <AppProvider>
      <View style={styles.container}>
        <LoginForm style={styles.loginForm}>
          <View style={styles.leftSide}>
            <Title style={styles.text}>Welcome to Talk Too</Title>
            <View style={styles.description}>
              <Text style={styles.text}>
                Are you ready to join our amazing community?
              </Text>
              <Text style={styles.text}>
                Let's get started by creating your account so you <Text style={styles.emphasis}>unlock 5 free messages every day!</Text>
              </Text>
            </View>
            <Text style={[styles.text, styles.privacy]}>
              By creating an account you agree with talktoo.ai
            </Text>
            <Text style={[styles.text, styles.privacy]}>
              <Text href='' style={styles.link}>terms of use</Text> and <Text href='' style={styles.link}>privacy policy</Text>.
            </Text>
            <GoogleAuthButton buttonStyle={styles.authButton} />
          </View>
          <SpriteSwipper swiperStyles={styles.swiper} spriteContainerStyles={styles.spriteContainer}/>
        </LoginForm>
      </View>
      <context.Consumer>
        {({ loggedUser, authError, clearLoggedUser, clearAuthError }) => (
          <Modal
            visible={loggedUser !== ''}
            animationType="fade"
            
            onRequestClose={() => {
              if (loggedUser !== '') {
                signOutGoogle();
              }

              clearLoggedUser();
              clearAuthError();
            }}
          >
            <View style={styles.alert}>
              <Text style={styles.alertText}>{loggedUser ? `Welcome ${loggedUser}!` : authError}</Text>
              <Text style={styles.alertText}>Press Esc for coming back</Text>
            </View>
          </Modal>
        )}
      </context.Consumer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121218',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginForm: {
    position: 'relative',
    flexDirection: 'row',
  },
  leftSide : {
    width: '53%',
    justifyContent: 'center',
    marginTop: 24,
    marginStart: 24,
  },
  text: {
    color: '#7D7D80',
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  description: {
    width: '87.5%',
    marginHorizontal: 'auto',
    marginVertical: 24,
  },
  emphasis: {
    color: '#FFF',
  },
  privacy: {
    color: '#7D7D80',
    fontSize: 16,
    lineHeight: 18,
    width: '85%',
    marginHorizontal: 'auto',
  },
  link: {
    color: '#A0A0A3',
    textDecorationLine: 'underline',
  },
  authButton: {
    width: '77%',
    marginHorizontal: 'auto',
    marginTop: '20%',
  },
  swiper: {
    width: '46%',
  },
  spriteContainer: {
    borderStartEndRadius: 32,
    borderEndEndRadius: 32,
  },
  alert: {
    backgroundColor: '#121218',
    height: '100%',
    justifyContent: 'center',
  },
  alertText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 32,
    textAlign: 'center',
  }
});
