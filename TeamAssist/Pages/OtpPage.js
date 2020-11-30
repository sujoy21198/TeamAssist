import React, { Component } from 'react';
import { StyleSheet, View, Alert, TextInput, SafeAreaView, StatusBar,TouchableOpacity } from 'react-native';
import { Text,Item } from 'native-base';
import OTPTextView from 'react-native-otp-textinput';
import BaseColor from '../Core/BaseTheme';
import axios from 'axios';

export default class OtpPage extends Component {

    constructor(props){
        super(props);
        this.state={
            phone : '',
            otp : ''
        }
        this.state.phone = this.props.route.params.phone
        console.log(this.state.phone)
        
    }

    resend = () => {
        alert(this.state.otp);
    }

    checkOtp = async() => {
        var phone = this.state.phone;
        var otp = this.state.otp;
        if(!otp || otp.length != 4){
            alert("plz enter 4 digit code")
            return;
        }
        await axios.post("http://teamassist.websteptech.co.uk/api/OTPcheck",{
            phone: phone,
            otp_code : otp
        }).then(function (response) {
            console.log(response.data)
            alert(response.data.title)
        })
        .catch(function (error) {
            //console.log(error);
        });
    }
    render() {
        // const {phone} = this.props.route.params
        // alert(phone)
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
                    handleTextChange={(text) => {this.setState({otp:text}) }}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    inputCellLength={1}
                    secureTextEntry= {true}
                />
                <Item style={{marginTop:20}}></Item>
                <View style={styles.resendView}>
                <Text style={styles.resendText}>If you didn't receive a code !</Text>
                {/* this.props.navigation.navigate('HomePage') */}
                <TouchableOpacity onPress={()=> this.checkOtp()}>
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
        marginTop: 250,
        marginLeft: 20
    },
    textStyle: {
        fontFamily: 'Poppins-Light',
        fontSize: 25,
        color: BaseColor.CommonTextColor,
        fontWeight: 'bold'
    },
    subtitle: {
        color: "#89919d",
        marginTop: 10,
        fontSize: 13,
        marginLeft: 20
    },
    roundedTextInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 70,
        marginTop: 10,
        color:"#fff",
        fontSize:30,
        backgroundColor: BaseColor.CommonTextColor
    },
    otpContainer: {
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 20,
    },
    resendView:{
        flexDirection:'row',
        alignContent:'flex-end',
        alignSelf:'flex-end',
        marginRight: 20
    },
    resendText:{
        color: "#89919d",
        marginTop: 30,
        fontSize: 13,
        marginLeft: 20
    },
    whiteText:{
        color: BaseColor.CommonTextColor,
        marginTop: 30,
        fontSize: 12,
        marginLeft: 2
    }
});