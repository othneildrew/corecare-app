
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
           <Text>ProfileScreen of app</Text> 
           <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});