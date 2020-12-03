import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    Caption,
    Drawer,
    Title,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import PoweredBy from '../assets/PoweredBy';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function DrawerContentPage(props) {


//     const[name,setUsername] = useState('');

//     useEffect(() => {
//         getSession();
//     })

//     const getSession = async() =>{
//         let value = await AsyncStorage.getItem('setUsername')
//         username = value;
//         console.log(name);
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             {/* <Text>hello there</Text>
//             <Icon
//             name='logout'
//             size={20}
//             /> */}
//             <DrawerContentScrollView {...props}>
//                 <View>
//                     <Title style={{ marginLeft: 10 }}>{name}</Title>
//                     <Caption style={{ marginLeft: 10 }}>MObile Application developer</Caption>


//                     <Drawer.Section style={styles.drawerSection}>
//                         <Drawer.Item
//                         icon={({ color, size }) => (
//                             <Icon
//                                 name='logout'
//                                 color={color}
//                                 size={23}
//                             />
//                         )}
//                         label="Sign Out"
//                         />
//                     </Drawer.Section>
//                 </View>
//             </DrawerContentScrollView>
//             <Drawer.Section style={styles.bottomDrawerSection}>
//                 {/* <Drawer.Item
//                     icon={({ color, size }) => (
//                         <Icon
//                             name='logout'
//                             color={color}
//                             size={23}
//                         />
//                     )}
//                     label="Sign Out"
//                 /> */}
//                 <View style={{flexDirection:'row'}}>
//                 <Text>Powered by </Text>
//                 <PoweredBy/>
//                 </View>
//             </Drawer.Section>
//         </View>
//     );
// }

export default class DrawerContentPage extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            email:''
        }
    }

    // signOut = async() => {
    //     await AsyncStorage.removeItem('username');
    //     await AsyncStorage.removeItem('useremailID');
    //     await AsyncStorage.removeItem('login_userID');


    //     this.props.navigation.navigate({
    //         name : 'WelcomePage'
    //     })
    // }

    componentDidMount(){
        this.getUserDetail();
    }

    getUserDetail = async() => {
        let value = await AsyncStorage.getItem('username');
        let email = await AsyncStorage.getItem('useremailID')
        this.setState({
            username: value,
            email : email
        })
        console.log(this.state.username);
    }
    render(props) {
        return (
            <View style={{ flex: 1 }}>
                {/* <Text>hello there</Text>
            <Icon
            name='logout'
            size={20}
            /> */}
                <DrawerContentScrollView {...props}>
                    <View>
                        <Title style={{ marginLeft: 10 }}>{this.state.username}</Title>
                        <Caption style={{ marginLeft: 10 }}>{this.state.email}</Caption>


                        <Drawer.Section style={styles.drawerSection}>
                            <Drawer.Item
                                icon={({ color, size }) => (
                                    <Icon
                                        name='logout'
                                        color={color}
                                        size={23}
                                    />
                                )}
                                label="Sign Out"
                                onPress={() => {}}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    {/* <Drawer.Item
                    icon={({ color, size }) => (
                        <Icon
                            name='logout'
                            color={color}
                            size={23}
                        />
                    )}
                    label="Sign Out"
                /> */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Powered by </Text>
                        <PoweredBy />
                        <Text style={{marginLeft:80}}>ver: 1.0</Text>
                    </View>
                </Drawer.Section>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 10,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        marginLeft:10
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})