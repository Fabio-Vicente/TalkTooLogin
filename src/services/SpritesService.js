import loginSprite from '../../assets/images/LoginSprite.png'

// Mock function getting the same sprite four times
export async function fetchSprites () {
  return new Promise((resolve, reject) => {
    try {
      resolve([1, 2, 3, 4].map(() => loginSprite))
    } catch (error) {
      reject(error.message);
    }
  });
};
