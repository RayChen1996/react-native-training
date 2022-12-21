import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const CustomRow = ({ title, description, image_url }) => (
    <View style={styles.container}>
        <Image 
        // source={{ uri: image_url }} 
        source={require('../../image/ReaderImg/st18_3.png')}
        style={styles.photo}
        
        />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>

    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
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
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
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