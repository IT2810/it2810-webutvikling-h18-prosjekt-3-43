import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Todo extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.todo}>
                <Text style={styles.todoText}>{this.props.val.date}</Text>
                <Text style={styles.todoText}>{this.props.val.todo}</Text>



                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.todoDelete}>
                    <Icon name="md-remove-circle" style={styles.actionButtonIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    todo: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        backgroundColor: 'white',
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    todoText: {
        paddingLeft: 0,
        borderLeftWidth: 0,
        //borderLeftColor: '#E91E63',
        color: 'black'
    },
    todoDelete: {
       // fontSize: 100,
        //height: 22,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
        padding: 20,
        top: 10,
        bottom: 10,
        right: 0
    },
    actionButtonIcon: {
        fontSize: 40,
        height: 40,
        color: 'slateblue'
    }
});