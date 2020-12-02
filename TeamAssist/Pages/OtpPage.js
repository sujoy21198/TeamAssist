import React, { Component } from 'react';
import {
    StyleSheet, View, Alert, TextInput,
    SafeAreaView, StatusBar, TouchableOpacity, Keyboard
} from 'react-native';
import { Text, Item } from 'native-base';
import OTPTextView from 'react-native-otp-textinput';
import BaseColor from '../Core/BaseTheme';
import CustomIndicator from '../Core/CustomIndicator';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNOtpVerify from 'react-native-otp-verify';
import { getItem, setItem } from '../Core/SessionHelper';


export default class OtpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            otp: '',
            isLoading: false,
            username: '',
            useremailID: '',
            login_userID: ''
        }
        this.state.phone = this.props.route.params.phone
        console.log(this.state.phone)

    }

    // componentDidMount() {
    //     RNOtpVerify.getOtp()
    //         .then(p => RNOtpVerify.addListener(this.otpHandler))
    //         .catch(p => console.log(p));
    // }

    // otpHandler = (message) => {
    //     console.log('SMS :: ', message)
    // }

    // onChangeText = (value) => {
    //     this.setState({
    //         otp: value
    //     })
    // }

    // resend = () => {
    //     alert(this.state.otp);
    // }

    resendOtp = async () => {
        var phone = this.state.phone;
        await axios.post("http://teamassist.websteptech.co.uk/api/OTPresend", {
            phone: phone
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            flag = true;
            console.log(error);
        })
    }

    checkOtp = async () => {
        Keyboard.dismiss();
        this.setState({ isLoading: true })
        var flag = false;
        var redirect = false;
        var phone = this.state.phone;
        var otp = this.state.otp;
        var username, useremailID, login_userID, data;
        if (!otp || otp.length != 4) {
            alert("plz enter 4 digit code")
            this.setState({ isLoading: false })
            return;
        }
        await axios.post("http://teamassist.websteptech.co.uk/api/OTPcheck", {
            phone: phone,
            otp_code: otp
        }).then(function (response) {
            console.log(response.data)
            //alert(response.data.title)
            data = response.data;
            username = response.data.username;
            useremailID = response.data.useremailID;
            login_userID = response.data.login_userID;
            flag = true;
            redirect = true;
            AsyncStorage.setItem("username", response.data.username);
            //AsyncStorage.setItem("useremailID",response.data.useremailID);
            //AsyncStorage.getItem("username", response.data.username);
            //AsyncStorage.getItem("useremailID",response.data.useremailID);
        })
            .catch(function (error) {
                flag = true;
                console.log(error);
            });

        this.setState({ username: username })
        this.setState({ useremailID: useremailID })
        this.setState({ login_userID: login_userID })

        // await AsyncStorage.setItem("username",this.state.username);

        if (redirect === true) {
            //alert(redirect)
            this.props.navigation.navigate({
                name: 'HomePage',
                params: {
                    phone: this.state.phone
                }
            })
        }


        //setItem(data);

        if (flag === true) {
            this.setState({ isLoading: false })
        }
        //this.onLogin();
    }

    // onLogin = async () => {
    //     try {
    //         //await AsyncStorage.setItem('login_userID', (this.state.login_userID));
    //         await AsyncStorage.setItem('username', this.state.username);
    //         await AsyncStorage.setItem('useremailID', this.state.useremailID);
    //         //await AsyncStorage.getItem('login_userID', this.state.login_userID);
    //         await AsyncStorage.getItem('username', this.state.username);
    //         await AsyncStorage.getItem('useremailID', this.state.useremailID);
    //         // await AsyncStorage.multiSet([['username', this.state.username],
    //         // ['useremailID', this.state.useremailID],
    //         // ['login_userID', this.state.login_userID]])
    //         // await AsyncStorage.multiGet([['username', this.state.username],
    //         // ['useremailID', this.state.useremailID],
    //         // ['login_userID', this.state.login_userID]])

    //         // this.props.navigation.navigate({
    //         //     name: 'HomePage',
    //         // })

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
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
                    handleTextChange={(text) => { this.setState({ otp: text }) }}
                    //handleTextChange={()=>this.onChangeText()}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    inputCellLength={1}
                    secureTextEntry={true}
                />
                <Item style={{ marginTop: 20 }}></Item>
                <View style={styles.resendView}>
                    <Text style={styles.resendText}>If you didn't receive a code !</Text>
                    {/* this.props.navigation.navigate('HomePage') */}
                    <TouchableOpacity onPress={() => this.resendOtp()}>
                        <Text style={styles.whiteText}>Resend</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  onPress={() => this.checkOtp()}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Verify</Text>
                    </View>
                </TouchableOpacity>

                <CustomIndicator IsLoading={this.state.isLoading} />
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
        color: "#fff",
        fontSize: 30,
        backgroundColor: BaseColor.CommonTextColor
    },
    otpContainer: {
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 20,
    },
    resendView: {
        flexDirection: 'row',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 20
    },
    resendText: {
        color: "#89919d",
        marginTop: 30,
        fontSize: 13,
        marginLeft: 20
    },
    whiteText: {
        color: BaseColor.CommonTextColor,
        marginTop: 30,
        fontSize: 12,
        marginLeft: 2
    },
    buttonStyle:{
        backgroundColor:BaseColor.CommonTextColor,
        width:140,
        marginTop:30,
        alignSelf:'center',
        borderRadius: 10,
        height:40
    },
    buttonText:{
        color: BaseColor.ColorWhite,
        fontFamily: 'Poppins-Light',
        alignSelf:'center',
        marginTop:6
    }
});