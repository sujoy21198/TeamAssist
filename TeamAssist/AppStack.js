import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './Pages/Splash'
import WelcomePage from './Pages/WelcomePage'
import SignInPage from './Pages/SignInPage';
import OtpPage from './Pages/OtpPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="WelcomePage" component={WelcomePage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="SignInPage" component={SignInPage}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="OtpPage" component={OtpPage}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
);


function AppStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                
            >
                <Drawer.Screen name="hi" component={StackScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
