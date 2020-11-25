import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/EvilIcons';
import BaseColor from './Core/BaseTheme';
import Splash from './Pages/Splash'
import WelcomePage from './Pages/WelcomePage'
import SignInPage from './Pages/SignInPage';
import OtpPage from './Pages/OtpPage';
import HomePage from './Pages/HomePage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="WelcomePage" component={WelcomePage}
            options={{ headerShown: false }} />
        <Stack.Screen name="SignInPage" component={SignInPage}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="OtpPage" component={OtpPage}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="HomePage" component={HomePage}
            options={{
                headerLeft: () => (
                    <Icon
                        name='navicon'
                        size={30}
                        style={{ margin: 10 }}
                        color={BaseColor.ColorBlack}
                        onPress={() => { navigation.openDrawer() }}
                    />
                ),
                headerTitle: 'Team Assist'
            }}
        />
    </Stack.Navigator>
);


function AppStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Team Assist" component={StackScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
