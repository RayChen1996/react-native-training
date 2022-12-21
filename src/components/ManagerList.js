import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from '../components/cell/manager_cell';




const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
            />

    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CustomListview;