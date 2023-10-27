import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-web-swiper";
import context from "../context";

export default function SpriteSwipper ({ swiperStyles, spriteContainerStyles }) {
  const { loginSprites } = useContext(context);

  return (
    loginSprites.length > 0
      && (
        <Swiper
          loop
          containerStyle={{ ...swiperStyles, ...styles.swiper }}
          timeout={6}
          controlsProps={{
            DotComponent: ({ _index, _activeIndex, isActive }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="4"
                viewBox="0 0 53 4"
                fill="none"
                style={{ margin: '4' }}
              >
                <rect opacity={!isActive ? 0.3 : undefined} width="53" height="4" rx="2" fill={isActive ? "#6558FF" : "white"} />
              </svg>
            ),
            prevPos: false,
            nextPos: false,
            dotsTouchable: true,
          }}
          springConfig={{ speed: 2 }}
        >
        {
          loginSprites.map((loginSprite) => (
            <View key={loginSprite} style={[spriteContainerStyles, styles.spriteContainer]}>
                <LinearGradient
                  colors={['#242427', 'transparent']}
                  start={{ x: 0, y: 1 }}
                  locations={[0.1638, 1]}
                  style={styles.overlay}
                />
                <Image source={loginSprite} style={styles.sprite} />
            </View>
          ))
        }
        </Swiper>
      )
  )
}

const styles = StyleSheet.create({
  swiper: {
    height: '100%',
    flex: 'none',
    position: 'absolute',
    right: 0,
  },
  spriteContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  sprite: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // Some bug makes a thin line appear when the sprite is horizontaly perfectly adjusted to its relative container
    left: 1,
    bottom: 14,
  },
  overlay: {
    width: '42%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  control: {
    marginHorizontal: 4
  }
});
