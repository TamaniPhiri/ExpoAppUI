import React from "react";
import HomeStack from "./Navigators/HomeStack";
import Login from "./Screens/Auth/Login";
import Onboard from "./Screens/Auth/Onboard";
import Signup from './Screens/Auth/Signup'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack =createSharedElementStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Onboard' screenOptions={{headerShown:false}}>
              <Stack.Screen name='Onboard' component={Onboard}/>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Signup' component={Signup}/>
              <Stack.Screen name='Welcome' component={HomeStack}/>
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
