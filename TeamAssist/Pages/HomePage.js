import React, { Component } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, CardItem, Header, Item, Left, Text } from 'native-base';
import BaseColor from '../Core/BaseTheme';
import Icon from 'react-native-vector-icons/EvilIcons'


const data = [
    { time: "9:30 AM", count: '01', account: 'EPFDI', contact: 'AMC of Desktop' },
    { time: "12:30 AM", count: '02', account: 'EPFDI', contact: 'AMC of Desktop' },
    { time: "4:30 PM", count: '03', account: 'EPFDI', contact: 'AMC of Desktop' },
    { time: "6:30 PM", count: '04', account: 'EPFDI', contact: 'AMC of Desktop' },
    { time: "7:30 PM", count: '05', account: 'EPFDI', contact: 'AMC of Desktop' },
    { time: "8:30 PM", count: '06', account: 'EPFDI', contact: 'AMC of Desktop' }

]


export default class HomePage extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.secondContainer}>
                    <Text style={styles.secondContainerText}>Today's Tasks</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.datetimeText}>Date & time</Text>
                        <Icon
                            name='calendar'
                            size={30}
                            style={{ margin: 5 }}
                            color={BaseColor.ColorWhite}
                            onPress={() => { navigation.openDrawer() }}
                        />
                    </View>
                </View>

                <View style={styles.showCallsView}>
                    <View style={styles.totalCalls}>
                        <Text style={styles.totalCallsText}>Today's total number of calls - 15</Text>
                    </View>
                    <View style={styles.unreadCalls}>
                        <Text style={styles.unreadCallsText}>Open calls - 09 | Pending calls - 06</Text>
                    </View>
                </View>

                <Item style={{ marginTop: 30 }}></Item>

                <FlatList
                    data={data}
                    renderItem={({ item }) =>

                        <Card style={{ width: 350, alignSelf: 'center'}}>
                            
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: BaseColor.SecondContainer, height: 40, width: 40, borderRadius: 20, flexDirection: 'row',marginLeft:10,marginTop:10 }}>
                                        <Text style={{ marginLeft: 10, marginTop: 10 }}>{item.count}</Text>
                                    </View>
                                    <Text style={{ marginLeft: 20, marginTop: 14, color: BaseColor.CommonTextColor, fontWeight: 'bold', fontSize: 17 }}>{item.time}</Text>
                                </View>
                            
                            
                                <View style={{flexDirection:'row',marginLeft:20,marginTop:10 }}>
                                    <Text style={{color:BaseColor.CommonTextColor}}>Account : </Text>
                                    <Text style={{color:BaseColor.CommonTextColor,fontWeight:'bold',fontSize:16}}>{item.account}</Text>
                                    <Text> | </Text>
                                    <Text style={{color:BaseColor.CommonTextColor}}>Contact : </Text>
                                    <Text style={{color:BaseColor.CommonTextColor,fontWeight:'bold',fontSize:16}}>{item.contact}</Text>
                                </View>
                            
                        </Card>
                    }
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.BackgroundColor,
    },
    secondContainer: {
        height: 80,
        backgroundColor: BaseColor.SecondContainer
    },
    secondContainerText: {
        color: BaseColor.ColorWhite,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },
    datetimeText: {
        color: BaseColor.ColorWhite,
        fontSize: 15,
        marginLeft: 20,
        marginTop: 5
    },
    showCallsView: {
        flexDirection: 'row',
        width: 350,
        height: 50,
        backgroundColor: '#000',
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 20
    },
    totalCalls: {
        width: 175,
        height: 50,
        backgroundColor: BaseColor.SecondContainer
    },
    unreadCalls: {
        width: 175,
        height: 50,
        backgroundColor: BaseColor.CommonTextColor
    },
    totalCallsText: {
        fontWeight: 'bold',
        color: BaseColor.ColorWhite,
        fontSize: 16,
        padding: 5
    },
    unreadCallsText: {
        color: BaseColor.ColorWhite,
        fontSize: 16,
        padding: 5
    }
})