import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Modal, SpriteSwipper, Title } from './src/components';
import InterFontFamily from './assets/fonts/Inter-VariableFont_slnt,wght.ttf';
import AppProvider from './src/context/AppProvider';

export default function App() {
  useFonts({
    Inter: InterFontFamily,
  });

  return (
    <AppProvider>
      <View style={styles.container}>
        <Modal style={styles.modal}>
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
          </View>
          <SpriteSwipper swiperStyles={styles.swiper} spriteContainerStyles={styles.spriteContainer}/>
        </Modal>
      </View>
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
  modal: {
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
  swiper: {
    width: '46%',
  },
  spriteContainer: {
    borderStartEndRadius: 32,
    borderEndEndRadius: 32,
  },
});
