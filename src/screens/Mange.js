import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList, Modal
} from 'react-native';
import Header from '../components/Header'
import CustomListview from '../components/ManagerList'
import CustomRow from '../components/cell/reader_cell'
import Main from '../components/Main'
const Manger = () => {
    handleInput = () => {
        console.log("Input Name")
    }
    getTitle = () =>{
        return "管理功能";
    }    
    getFunctionList = () => {
        return <RdrFlatListView></RdrFlatListView>
    }
    getData = () => {
        return [
            {
              key: 1, title: '卡片管理',
              description: '192.168.10.89',
              image_url: "../image/ReaderImg/st18_3.png"  
            },
            {
              key: 2,
              title: 'IO動作埠',
              description: '192.168.10.89',
              image_url: "../image/ReaderImg/st580.png"
            }
          ]

    }
    return(
        
         

    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1  }} >


      </View>
     
      <View style={{ flex: 5,  }} >
            <CustomListview
                itemList={getData()}
                />
      </View>
    </View>




       
    )
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    titleWrapper: {

    },
    inputWrapper: {

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    contentContainer: {
        flex: 1, // pushes the footer to the end of the screen
        justifyContent: 'flex-end'
    },
    footer: {
        height: 100
    }
});


export default Manger;
