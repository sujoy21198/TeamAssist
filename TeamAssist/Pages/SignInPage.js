import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet,StatusBar } from 'react-native';
import { Text,Input,Item, Button } from 'native-base';
import BaseColor from '../Core/BaseTheme';

export default class SignInPage extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.textArea}>
                    <Text style={styles.textStyle}>Welcome back</Text>
                </View>
                <View>
                    <Text style={styles.mobileNumberText}>Mobile number</Text>
                </View>
                <Item regular style={styles.inpStyle} >
                    <Input placeholder="Regular test box" keyboardType='numeric' style={{color:"#fff"}}/>
                </Item>
                <Button style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('OtpPage')}>
                    <Text style={styles.buttonText}>        Submit</Text>
                </Button>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.BackgroundColor,
    },
    textArea:{
        marginTop:300,
        marginLeft:20
    },
    textStyle:{
        fontFamily:'Poppins-Light',
        fontSize:25,
        color:'#fff',
        fontWeight:'bold'
    },
    mobileNumberText:{
        color:"#89919d",
        marginTop:50,
        fontSize:15,
        marginLeft:20
    },
    inpStyle:{
        width:350,
        marginLeft:20,
        height:40,
        marginTop:20,
        borderRadius:10,
    },
    buttonStyle:{
        backgroundColor:"#fff",
        alignSelf:'flex-end',
        marginRight:20,
        marginTop:30,
        height:35,
        width:150,
        borderRadius:5
    },
    buttonText:{
        color:'#89919d',
    }
})