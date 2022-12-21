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
} from 'react-native';

const Footer = () =>{
    return(
        <>
        <View style={{ flex:1,flexDirection: "column" }}>
            <View style={{ flex: 1, backgroundColor: "red" }} >
 
            </View>
            <View style={{ flex: 2, backgroundColor: "darkorange" }} >

            </View>
            <View style={{ flex: 3, backgroundColor: "green" }} >

            </View>
        </View>        
        </>
    )
}


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
  
  export default Footer;