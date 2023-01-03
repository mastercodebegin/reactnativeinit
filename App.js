/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Pdf from 'react-native-pdf';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screen/dashboard/Dashboard';
import PdfView from './src/component/PdfView';

import { NavigationContainer } from '@react-navigation/native';
import DisplayAdd from './src/component/DisplayAdd';
// import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';


const App = () => {
  const Stack = createNativeStackNavigator();
  const [uri, setUri] = React.useState()
  useEffect(() => {

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="add" component={DisplayAdd} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Pdf" component={PdfView} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;
