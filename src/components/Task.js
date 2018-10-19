import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doneColor: props.val.isDone ? 'forestgreen' : 'limegreen'
        }
    }
    render() {
        return (
            <View key={this.props.keyval} style={styles.task}>
                <View style={styles.text}>
                    <Text style={styles.taskDate}>{this.props.val.date}</Text>
                    <Text style={styles.taskText}>{this.props.val.task}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                        <Icon name="md-remove-circle" style={styles.actionButtonIconDelete} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.completeMethod} style={styles.taskDelete}>
                        <Icon name="md-checkmark-circle" style={styles.actionButtonIconCheck} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    task: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    text: {

    },
    buttons: {
        display: 'flex',
        flexDirection: 'row'
    },
    taskDate: {
        color: '#bbb'
    },
    taskText: {
        fontSize: 19,
        overflow: 'hidden'
    },
    taskDelete: {
    },
    actionButtonIconDelete: {
        fontSize: 40,
        height: 40,
        color: 'red'
    },
    actionButtonIconCheck: {
        fontSize: 40,
        height: 40,
        color: 'forestgreen',
        marginLeft: 12
    },
});