import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import UnAuthenticatedStack from './src/navigation/UnAuthenticatedStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticatedStack from './src/navigation/AuthenticatedStack';
import { useFonts } from 'expo-font';
import { FONTS } from './src/assets/styles/texts';

export default function App() {

  const [fontsLoaded] = useFonts({
    [FONTS.regular]: require('./src/assets/fonts/Poppins-Regular.ttf'),
    [FONTS.medium]: require('./src/assets/fonts/Poppins-Medium.ttf'),
    [FONTS.semibold]: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    [FONTS.bold]: require('./src/assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
