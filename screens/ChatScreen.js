
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MessageCard from '../components/MessageCard';


export default function ChatScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <MessageCard
                name='Percy Jackson'
                time='9:00am'
                isOnline={true}
            />

           <Text>ChatScreen of app</Text> 
           <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});