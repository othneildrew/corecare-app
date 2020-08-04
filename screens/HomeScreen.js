
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
           <Text>HomeScreen of app</Text> 
           <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});