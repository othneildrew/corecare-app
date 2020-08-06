
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Modal,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { DefaultText } from '../components/DefaultText';
import { LogoIcon, CloseIcon } from '../components/CustomIcons';


export default function LoginModal() {
    const [ modalVisible, setModalVisible ] = useState(true);
    const [ emailTextInput, setEmailTextInput ] = useState('');
    const [ pswdTextInput, setPswdTextInput ] = useState('');

    return (
        // <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log('modal has been closed')
                }}
            >
                <View style={styles.centeredView}>
                    <SafeAreaView style={styles.modalView}>

                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                            <CloseIcon width={40} height={40} stroke='#000000' style={styles.closeIcon}/>
                        </TouchableWithoutFeedback>
                        

                        <View style={[ styles.centerAlignSelf, styles.formView ]}>
                            <View>
                                <LogoIcon
                                    width={245}
                                    height={61}
                                    fill='#41a8a2'
                                    style={styles.centerAlignSelf}
                                />
                                <DefaultText style={[ styles.centerAlignSelf, { fontSize: 16 } ]}>Lorem Ipsum dolor sit amet</DefaultText>
                            </View>

                            <TextInput style={styles.textInput}
                                onChangeText={(text) => setEmailTextInput(text)}
                                value={emailTextInput}
                            />

                            <TextInput style={styles.textInput}
                                onChangeText={(text) => setPswdTextInput(text)}
                                value={pswdTextInput}
                            />

                            <TouchableOpacity
                                onPress={ () => console.log('forgot psswd btn pressed!')}
                            >
                                <DefaultText style={styles.forgotPwText}>Forgot your password?</DefaultText>
                            </TouchableOpacity>

                        
                            <TouchableOpacity style={styles.button}>
                                <DefaultText style={styles.buttonText}>Log In</DefaultText>
                            </TouchableOpacity>
                        </View>



                        <View style={{marginTop: 80}}>
                            <DefaultText style={[styles.centerAlignSelf]}>or sign in with</DefaultText>

                            <View style={[styles.centerAlignSelf, styles.textGroup]}>
                                <DefaultText style={{fontSize: 16}}>New to CoreCare</DefaultText>
                                <TouchableOpacity onPress={() => console.log('signup requested')}>
                                    <DefaultText style={styles.signupLink}>Sign Up</DefaultText>
                                </TouchableOpacity>
                            </View>
                            {/* <DefaultText>
                                New to CoreCare?
                                
                            </DefaultText> */}


                        </View>

                        
                    </SafeAreaView>
                </View>


            </Modal>
        // </View>
    );
}

const styles = StyleSheet.create({
    centerAlignSelf: {
        marginRight: 'auto',
        marginLeft: 'auto',
        // backgroundColor: 'blue',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 'auto',
        // marginLeft: 'auto',
        backgroundColor: '#ffffff',
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    formView: {
        marginTop: 35,
        paddingHorizontal: 25,
        width: '100%',
        // backgroundColor: 'pink',
    },
    closeIcon: {
        margin: 18,
    },
    logo: {
        marginTop: 75,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    textInput: {
        marginTop: 25,
        paddingHorizontal: 18,
        height: 50,
        borderBottomWidth: 3,
        borderBottomColor: '#00655f',
        backgroundColor: '#eef7f7',
    },
    forgotPwText: {
        marginTop: 5,
        width: 'auto',
        color: '#41a8a2',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 38,
        height: 60,
        borderRadius: 5,
        alignContent: 'center',
        backgroundColor: '#00655f',
    },
    buttonText: {
        width: '100%',
        color: '#ffffff',
        fontFamily: 'MontserratAlternates_700Bold',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    textGroup: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        backgroundColor: 'green',
    },
    signupLink: {
        paddingLeft: 10,
        fontFamily: 'MontserratAlternates_700Bold',
        fontSize: 16,
        fontWeight: '700',
    }
});