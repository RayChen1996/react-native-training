import {React,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import Header from '../components/Header'
import Main from '../components/Main'
 
import CustomListview from '../components/RdrListview'
import CustomRow from '../components/cell/reader_cell'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/FontAwesome';
 
 
 
const Stack = createNativeStackNavigator();
const Home = () => {
    const [readerData, setreaderData] = useState('');
    // let readerData = []
    getTitle = () =>{
        return "讀卡機";
    }
    handleInput = () => {
        console.log("Input Name")
    }
     
    getFunctionList = () => {
        return <RdrFlatListView></RdrFlatListView>
    }
    getData = () => {

        // this.readerData.push({
            
        //         key: 1, title: 'ST-580',
        //         description: '192.168.10.89',
        //         image_url: "../image/ReaderImg/st18_3.png"  
               
        // },{
        //     key: 2,
        //     title: 'ST-18',
        //     description: '192.168.10.89',
        //     image_url: "../image/ReaderImg/st580.png"
        // })
        return readerData

    }    
    const onPress = () => {
        console.log("Press Add ")
        readerData.push({
            
                key: 1, title: 'ST-780',
                description: '192.168.10.89',
                image_url: "../image/ReaderImg/st18_3.png"  
               
        })
        console.log( readerData  )
        console.log( `卡機  ${ readerData.length} 台`  )
        renderData()

    };
    renderData = () => {
        return <CustomListview
        itemList={getData()}
        />
    }
    HomeScreen = ({ navigation }) => {
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigation.navigate('Profile', { name: 'Jane' })
            }
          />
        );
      };
      ProfileScreen = ({ navigation, route }) => {
        return <Text>This is {route.params.name}'s profile</Text>;
      };
    return(
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            <View style={{ flex: 1  }} >
            <Header
                  title={getTitle()}
                  style={{flex: .5,}}
                  >
                  </Header>   
      
            </View>
           
            <View style={{ flex: 4,  }} >
            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer> */}

                  <CustomListview
                      itemList={getData()}
                      />
            </View>

            <View style={{ flex: 1,flexDirection: "row"  }} >

                <View style={{ flex: 1  }}></View>
                <View style={{ flex: 3  }}></View>
                <View style={{ flex: 1   }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View> 
                 <Button
       title="Go to Jane's profile"
         onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        justifyContent:'center',
        width:50,
        height:50,
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
export default Home;
