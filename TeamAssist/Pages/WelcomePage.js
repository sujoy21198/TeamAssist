import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {Button, Text} from 'native-base'
import BaseColor from '../Core/BaseTheme';
import Webstep from '../assets/Webstep';
import Shadow from '../assets/Shadow'

export default class WelcomPage extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.logo}>
                    <Webstep />
                </View>
                <View style={styles.shadow}>
                    <Shadow />
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.textStyle}>Team Assist Collaboration</Text>
                    <Text style={styles.subTitle}>Bring together your files, your projects and peoples.</Text>
                </View>

                <Button style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('TestPage')}>
                    <Text style={styles.buttonText}>        Sign in</Text>
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
    shadow: {
        alignSelf: 'center'
    },
    logo: {
        marginTop: 250,
        alignSelf: 'center',
    },
    textArea:{
        alignSelf:'center',
        alignContent:'center',
        marginTop:30
    },
    textStyle:{
        fontFamily:'Poppins-Light',
        alignSelf:'center',
        fontSize:25,
        color:'#fff',
        fontWeight:'bold'
    },
    subTitle:{
        color:'#89919d',
        fontSize:12,
        fontFamily:'Poppins-Regular',
        alignSelf:'center'
    },
    buttonStyle:{
        backgroundColor:"#fff",
        width:150,
        marginTop:80,
        alignSelf:'center',
        borderRadius: 10,
    },
    buttonText:{
        color: '#89919d',
        fontFamily: 'Poppins-Light',
    }
});