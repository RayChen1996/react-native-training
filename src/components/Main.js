import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'; 

const Main = () => {
    return(
        <View style={styles.container}>
        
        </View>
    )
}


var styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        width: '100%',
        height: 50,
        margin:5,
        borderColor:"#ddd"
    },
 
    contentContainer: {
        flex: 1, // pushes the footer to the end of the screen
        justifyContent: 'flex-end'
    },
 
});
export default Main;
