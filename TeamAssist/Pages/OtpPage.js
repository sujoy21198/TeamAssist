import React, { Component } from 'react';
import { StyleSheet, View, Alert, TextInput, SafeAreaView, StatusBar,TouchableOpacity } from 'react-native';
import { Text,Item } from 'native-base';
import OTPTextView from 'react-native-otp-textinput';
import BaseColor from '../Core/BaseTheme';

export default class OtpPage extends Component {

    resend = () => {
        alert("resend Pressed");
    }

    render() {
        return (
            // <View style={styles.container}>
            //     <OTPTextView
            //         handleTextChange={(e) => { }}
            //         containerStyle={styles.textInputContainer}
            //         textInputStyle={styles.roundedTextInput}
            //         inputCount={5}
            //         inputCellLength={2}
            //     />
            // </View>
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.textArea}>
                    <Text style={styles.textStyle}>Verification code</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Enter the verification code we just sent you on your mobile number</Text>
                </View>
                <OTPTextView
                    handleTextChange={() => { }}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    inputCellLength={1}
                    secureTextEntry= {true}
                />
                <Item></Item>
                <View style={styles.resendView}>
                <Text style={styles.resendText}>If you didn't receive a code !</Text>
                <TouchableOpacity onPress={()=> this.resend()}>
                <Text style={styles.whiteText}>Resend</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.BackgroundColor,
    },
    textArea: {
        marginTop: 300,
        marginLeft: 20
    },
    textStyle: {
        fontFamily: 'Poppins-Light',
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    subtitle: {
        color: "#89919d",
        marginTop: 10,
        fontSize: 12,
        marginLeft: 20
    },
    roundedTextInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 70,
        marginTop: 10,
        color:"#fff",
        fontSize:30
    },
    otpContainer: {
        width: '90%',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        margin: 10
    },
    resendView:{
        flexDirection:'row'
    },
    resendText:{
        color: "#89919d",
        marginTop: 30,
        fontSize: 12,
        marginLeft: 20
    },
    whiteText:{
        color: "#fff",
        marginTop: 30,
        fontSize: 12,
        marginLeft: 2
    }
});