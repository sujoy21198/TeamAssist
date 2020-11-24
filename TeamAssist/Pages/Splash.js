import React, { Component } from 'react';
import {View,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Webstep from '../assets/Webstep';
import BaseColor from '../Core/BaseTheme';
import Shadow from '../assets/Shadow';

export default class Splash extends Component{
    constructor(props){
        super(props);
        setTimeout(() => {
            this.props.navigation.reset({
                index:0,
                routes:[{name:"WelcomePage"}]
            });
        },3500);
    }

    render(){
        return(
            <View style={{height: '100%', backgroundColor: BaseColor.BackgroundColor }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={BaseColor.ColorWhite} translucent={true} />
                <View style={{alignSelf: 'center',marginTop:300 }}>
                    <Animatable.View animation="slideInDown" iterationCount={5} direction="alternate">
                        <Webstep/>
                    </Animatable.View>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Shadow />
                </View>
            </View>
        );
    }
}