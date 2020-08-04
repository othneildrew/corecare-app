
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DefaultText } from '../utils/DefaultText';


export default function MessageCard(props) {

    return (
        <TouchableOpacity style={styles.container}>
            <DefaultText>hello this is text at the bottom in the bottom navbar</DefaultText>

            {/* <DefaultText /> */}
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginRight: 10,
        marginBottom: 12,
        marginLeft: 10,
        borderRadius: 10,
        minHeight: 76,
        backgroundColor: '#ffffff',
    }
});