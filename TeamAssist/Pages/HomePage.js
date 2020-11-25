import React, { Component } from 'react'
import {SafeAreaView,StyleSheet} from 'react-native';
import {} from 'native-base';
import BaseColor from '../Core/BaseTheme';

export default class HomePage extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.BackgroundColor,
    },

})