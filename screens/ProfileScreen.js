
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginModal from '../modals/LoginModal';


export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
           
           
           
           {/* <Text>ProfileScreen of app</Text> 
           <StatusBar style='auto' /> */}




           <LoginModal />








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