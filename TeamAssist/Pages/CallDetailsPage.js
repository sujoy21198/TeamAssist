import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { Item, Text, Input, Picker, Footer,Button } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons'
import BaseColor from '../Core/BaseTheme';


export default class CallDetailsPage extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.showCallsView}>
                        <View style={styles.totalCalls}>
                            <Text style={styles.totalCallsText}>Today's total number of calls - 15</Text>
                        </View>
                        <View style={styles.unreadCalls}>
                            <Text style={styles.unreadCallsText}>Open calls - 09 | Pending calls - 06</Text>
                        </View>
                    </View>

                    <View style={styles.timeandcountView}>
                        <View style={styles.itemCount}>
                            <Text style={styles.itemCountText}>01</Text>
                        </View>
                        <Text style={styles.timeText}>9:30 AM</Text>
                    </View>

                    <View style={styles.accountTextView}>
                        <Text style={styles.accountText}>Account</Text>
                    </View>

                    <View style={styles.accountTextBox}>
                        <Text style={{ marginLeft: 10,marginTop:10 }}>EPFD</Text>
                    </View>

                    <View style={styles.accountTextView}>
                        <Text style={styles.accountText}>Contact name</Text>
                    </View>

                    <View style={styles.accountTextBox}>
                        <Text style={{ marginLeft: 10,marginTop:10 }}>AMC of desktop</Text>
                    </View>

                    <View style={styles.accountTextView}>
                        <Text style={styles.accountText}>Address</Text>
                    </View>

                    <View style={styles.calldetailsBox}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ marginLeft: 10,marginTop:10 }}>Howrah</Text>
                        <Icon
                        name="location"
                        size={30}
                        style={{marginLeft:240,marginTop:30}}
                        />
                        </View>
                    </View>

                    <View style={styles.accountTextView}>
                        <Text style={styles.accountText}>Call Details</Text>
                    </View>

                    <View style={styles.calldetailsBox}>
                        <Text style={{ marginLeft: 10,marginTop:10 }}>hi this is details of the calls assigned to an employee</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <View style={styles.accountTextView}>
                                <Text style={styles.accountText}>Department</Text>
                            </View>

                            <View style={styles.rowTextBox}>
                                <Text style={{ marginLeft: 10 ,marginTop:10}}>Account</Text>
                            </View>
                        </View>

                        <View>
                            <View style={styles.accountTextView}>
                                <Text style={styles.accountText}>User</Text>
                            </View>

                            <View style={styles.rowTextBox}>
                                <Text style={{ marginLeft: 10 ,marginTop:10}}>A k Ghosh</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <View style={styles.accountTextView}>
                                <Text style={styles.accountText}>Primary issues</Text>
                            </View>

                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 160, marginLeft: 20 }}
                            >

                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />

                            </Picker>
                        </View>

                        <View>
                            <View style={styles.accountTextView}>
                                <Text style={styles.accountText}>Secondary issues</Text>
                            </View>

                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 160, marginLeft: 25, borderColor: BaseColor.BorderColor, borderWidth: 2, }}
                            >

                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />

                            </Picker>
                        </View>
                    </View>

                    <Item></Item>

                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Button style={{ backgroundColor: BaseColor.CommonTextColor, marginRight: 30, borderRadius: 10, marginLeft:20,height:40,width:90 }}>
                            <Text style={{ fontSize: 12 }}>Close call</Text>
                        </Button>

                        <Button 
                        onPress={() => this.props.navigation.navigate('CallClosedPage')}
                        style={{ backgroundColor: "#19bc45",  borderRadius: 10,height:40,width:100,marginRight:30 }}>
                            <Text style={{ fontSize: 12 }}>Reshedule call</Text>
                        </Button>

                        <Button style={{ backgroundColor: "#bb0808", borderRadius: 10,marginRight:0,height:40,width:90 }}>
                            <Text style={{ fontSize: 12 }}>Pending call</Text>
                        </Button>
                    </View>

                    <Input></Input>

                </ScrollView>
                {/* <Footer style={styles.footer}>
                        <Button style={{ backgroundColor: BaseColor.CommonTextColor, marginRight: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 12 }}>Close Call</Text>
                        </Button>

                        <Button style={{ backgroundColor: "#19bc45", marginRight: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 12 }}>Reshedule call</Text>
                        </Button>

                        <Button style={{ backgroundColor: "#bb0808", borderRadius: 10 }}>
                            <Text style={{ fontSize: 12 }}>pending call</Text>
                        </Button>
                    </Footer> */}                    
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    showCallsView: {
        flexDirection: 'row',
        width: 355,
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
        width: 180,
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
    },
    itemCount: {
        backgroundColor: "#e6e6e6",
        height: 40,
        width: 40,
        borderRadius: 20,
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10
    },
    itemCountText: {
        marginLeft: 10,
        marginTop: 10
    },
    timeText: {
        marginLeft: 20,
        marginTop: 14,
        color: BaseColor.CommonTextColor,
        fontWeight: 'bold',
        fontSize: 17
    },
    timeandcountView: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20
    },
    accountTextView: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 10
    },
    accountText: {
        fontSize: 13,
        color: BaseColor.AboveFieldTextColor
    },
    accountTextBox: {
        marginLeft: 30,
        borderColor: BaseColor.BorderColor,
        borderWidth: 2,
        borderRadius: 5,
        width: 340,
        marginTop: 10,
        height: 50
    },
    rowTextBox: {
        marginLeft: 30,
        borderColor: BaseColor.BorderColor,
        borderWidth: 2,
        width: 150,
        marginTop: 10,
        borderRadius: 5,
        height: 50
    },
    calldetailsBox: {
        marginLeft: 30,
        borderColor: BaseColor.BorderColor,
        borderWidth: 2,
        borderRadius: 5,
        width: 340,
        marginTop: 10,
        height: 100
    },
    footer: {
        height: 70,
        backgroundColor: BaseColor.ColorWhite,
        paddingBottom: 20
    }
})