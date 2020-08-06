
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { DefaultText } from './DefaultText';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';


export default function MessageCard(props) {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.avatar} source={require('../assets/lego_user.jpg')} />
                <View style={{}}>
                    <View style={styles.textContainer}>
                        <DefaultText style={styles.name}>Percy Jackson</DefaultText>
                        <DefaultText style={styles.time}>9:00am</DefaultText>
                    </View>
                    <DefaultText style={styles.message}>Lorem ipsum dolor sit amet consector...</DefaultText>
                </View>
            </View>

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
        padding: 15,
        borderRadius: 10,
        height: 156,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        display: 'flex',
        // justifyContent: 'cente
        flexDirection: 'row',
        // alignItems: 'center',
        // alignContent: 'center',
        alignContent: 'center',
        backgroundColor: 'red',
        height: '100%',
    },
    textContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        // fontWeight: '500',
        lineHeight: 6,
    },
    time: {
        fontSize: 12,
        color: '#969696',
    },
    message: {
        color: '#969696',
        fontSize: 12,
    }
});