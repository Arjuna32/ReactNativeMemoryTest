import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './pages/LoginScreen.js';
import { ClassSelect } from './pages/ClassSelect.js';
import { MyScreen } from './pages/MyScreen.js';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResultScreen } from './pages/ResultScreen.js';

//const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider >
    <MyTabs></MyTabs>
    </NativeBaseProvider>
  );
}


 function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen"
         component={LoginScreen}
         options= {{headerShown: false,}} />
        
        <Stack.Screen 
        name="MyScreen" 
        component={MyScreen}
        options= {{headerShown: false,}} />
        <Stack.Screen
        name = "ClassSelect"
        component = {ClassSelect}
        options= {{headerShown: false,}}
        ></Stack.Screen>
        <Stack.Screen
        name = "ResultScreen"
        component = {ResultScreen}
        options= {{headerShown: false,}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}