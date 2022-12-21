import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const CustomRow = ({ title, description, image_url }) => (
    <View style={styles.container}>

        <View style={styles.container_text}>
            <View>
                <Image 
                    // source={{ uri: image_url }} 
                    source={require('../../image/InApp/readtime.png')}
                    style={styles.photo}
                    
                    />
                <Text style={styles.title}>
                     卡片管理 
                </Text>

            </View>
            <View>
                <Image 
                    // source={{ uri: image_url }} 
                    source={require('../../image/InApp/writecard2.png')}
                    style={styles.photo}
                    
                    />
                <Text style={styles.title}>
                歷史紀錄
                </Text>                
            </View>            

           
        </View>

    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        // backgroundColor: '#FFF',
        // elevation: 2,
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain' 
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 12,
        
        justifyContent:'space-between',
        alignItems:'center'

    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 60,
        width: 50,
        flex: .25,
        justifyContent:'center',
        alignItems:'center',
    
        resizeMode: 'contain' 
    },
});


export default CustomRow;