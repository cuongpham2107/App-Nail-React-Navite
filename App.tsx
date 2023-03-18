import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './pages/home';
import about from './pages/about';

// NativeWindStyleSheet.setOutput({
//   default: "native",
// });

const Stack = createNativeStackNavigator()

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name='home' component={home} />
        <Stack.Screen name='about' component={about} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}