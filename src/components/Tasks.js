import React from 'react';
import { Text, TextInput, StyleSheet, Button, TouchableHighlight, View, ScrollView, Modal, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Task from './Task';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            taskArray: [],
            taskText: '',
            modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {


        let tasks = this.state.taskArray.map((val, key)=>{
            return <Task key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteTask(key)}/>
        });
        return (
            <View style={styles.container}>

                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                >
                    <View style={{marginTop: 50}}>
                        <Button 
                            title='Close'
                            onPress={() => { this.setModalVisible(false);}}
                        />

                        <TextInput
                        style={styles.textInput}
                        placeholder='YOLO'
                        onChangeText={(taskText)=> this.setState({taskText})}
                        value={this.state.taskText}
                    ></TextInput>

                        <Button
                            title='Save'
                            onPress={this.addTask.bind(this)}
                        />


                    </View>
                </Modal>
                <ScrollView style={styles.scrollContainer}>
                    {tasks}
                </ScrollView>

                <ActionButton buttonColor='slateblue' onPress={() => { this.setModalVisible(true);}}/>
            </View>
        );
    }
    //#9b59b6
    addTask(){
        if(this.state.taskText){
            var d = new Date();
            this.state.taskArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'task': this.state.taskText
            });
            this.setState({ taskArray: this.state.taskArray });
            this.setState({taskText:''});
            this.setModalVisible(false);
        }
    }
    deleteTask(key){
        this.state.taskArray.splice(key, 1);
        this.setState({taskArray: this.state.taskArray});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    row: {
        top: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    scrollContainer: {
      //  backgroundColor: 'red'
    },
    textInput: {
        fontSize: 30,
        padding: 20,
        paddingRight: 100,
        backgroundColor: 'white',
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
        //backgroundColor: 'blue'
    },
});