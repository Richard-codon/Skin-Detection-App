import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import CaptureImageScreen from './screens/CaptureImageScreen';
import UploadImageScreen from './screens/UploadImageScreen';
import DiagnosisResultScreen from './screens/DiagnosisResultScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Capture Image" component={CaptureImageScreen} />
        <Stack.Screen name="Upload Image" component={UploadImageScreen} />
        <Stack.Screen name="Diagnosis Result" component={DiagnosisResultScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
