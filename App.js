import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import UnAuthenticatedStack from './src/navigation/UnAuthenticatedStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticatedStack from './src/navigation/AuthenticatedStack';
import { useFonts } from 'expo-font';
import { FONTS } from './src/assets/styles/texts';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const hideSplashScreen = async () => await SplashScreen.hideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    [FONTS.regular]: require('./src/assets/fonts/Poppins-Regular.ttf'),
    [FONTS.medium]: require('./src/assets/fonts/Poppins-Medium.ttf'),
    [FONTS.semibold]: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    [FONTS.bold]: require('./src/assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        hideSplashScreen()
      }, 400)
    }
  }, [fontsLoaded])

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <NavigationContainer>
            <View style={{ flex: 1 }}>
              <AuthenticatedStack />
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      </View>
    )
  }

  return null

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
