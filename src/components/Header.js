import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const Header = (props) => {
    const title = () =>{
        return props.title
    }

    return(
        <View style={styles.container}>
 
            <View style={styles.contentContainer}>  

                <View style={styles.titleWrapper}>
                    <Text>{title()}</Text>
                </View>
                <View style={styles.inputWrapper}>

                </View>

            </View>

            <View style={styles.middleContent}>

            </View>

            <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button} 
                    >
                        <Text>編輯</Text>
                    </TouchableOpacity>
            </View>


        </View>
    )
}


var styles = StyleSheet.create({
    container: {
        flexDirection: "row",        
        justifyContent: 'center',
        backgroundColor: '#ccc',
        width: '100%',
        height:50                
    },
    titleWrapper: {
        justifyContent: 'center',
        alignItems:'center',
        

    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
    inputWrapper: {

    },
    contentContainer: {
         margin:10,
         flex:1
        
    },
    middleContent:{
        flex:2, 
    },
    footer: {

        flex:1, 
    }
});
export default Header;
