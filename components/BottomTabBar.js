
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function BottomTabBar({ state, descriptors, navigation }) {







    return (
        <View style={styles.container}>
            <Text>hello this is text at the bottom in the bottom navbar</Text>

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
    }
});