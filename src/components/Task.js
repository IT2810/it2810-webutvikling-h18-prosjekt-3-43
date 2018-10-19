import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Task extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.task}>
                <Text style={styles.taskText}>{this.props.val.date}</Text>
                <Text style={styles.taskText}>{this.props.val.task}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                    <Icon name="md-remove-circle" style={styles.actionButtonIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    task: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        backgroundColor: 'white',
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    taskText: {
        paddingLeft: 0,
        borderLeftWidth: 0,
        color: 'black'
    },
    taskDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
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