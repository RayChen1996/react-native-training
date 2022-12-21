/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Share,
  Button,
  TextInput
} from 'react-native';

import {plusSlides} from './src/socket/SocaTCP'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
import MainHeader from './src/components/Header';
import BottomNavBae  from './src/components/Footer';
import SelectDropdown from 'react-native-select-dropdown'

import Home from './src/screens/Home'
import Mange from './src/screens/Mange'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
function App() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          '測試 匯出功能',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {

        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const HomeScreen = ({navigation}) => {
    return (
      <Home></Home>
      // <Button
      //   title="Go to Jane's profile"
      //   onPress={() =>
      //     navigation.navigate('Profile', {name: 'Jane'})
      //   }
      // />
    );
  };
  const ProfileScreen = ({navigation, route}) => {
    return <Mange />;
  };


  

  


  const onPress = () => setCount(prevCount => prevCount + 1);
  const isDarkMode = useColorScheme() === 'dark';
  const countries = ["ST-580", "ST-680", "ST-18"]
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>

    
    
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '卡機首頁'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>


      {/* <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />



      <MainHeader></MainHeader> */}


      {/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer> */}


      {/* <TextInput
      placeholder='IP'
      ></TextInput>


       <TextInput
      placeholder='Port'
      ></TextInput>


       <TextInput
      placeholder='機號'
      ></TextInput> */}


      {/* <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />

      <Button onPress={onShare} title="Share" />

      <Button onPress={OpenDoor} title="Action" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
 

            <Text>Press Here</Text>
          <TouchableOpacity
          onPress={onPress}
          >
            
          </TouchableOpacity>

      </ScrollView> */}
      {/* <BottomNavBae></BottomNavBae> */}
    {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
