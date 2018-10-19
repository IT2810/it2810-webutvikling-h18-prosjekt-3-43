import React from 'react';
import { Text, TextInput, StyleSheet, TouchableHighlight, View, ScrollView, Modal, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Todo from './Todo';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todoArray: [],
            todoText: '',
            modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {


        let todos = this.state.todoArray.map((val, key)=>{
            return <Todo key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteTodo(key)}/>
        });
        return (
            <View style={styles.container}>

                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                >
                    <View style={{marginTop: 50}}>
                        <Text>Hello World!</Text>
                        <TextInput
                        style={styles.textInput}
                        placeholder='YOLO'
                        onChangeText={(todoText)=> this.setState({todoText})}
                        value={this.state.todoText}
                    ></TextInput>

                        <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(false);
                        }}>
                        <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                <ScrollView style={styles.scrollContainer}>
                    {todos}
                </ScrollView>

                <ActionButton buttonColor='slateblue' onPress={() => { this.setModalVisible(true);}}/>
            </View>
        );
    }
    //#9b59b6
    addTodo(){
        if(this.state.todoText){
            var d = new Date();
            this.state.todoArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'todo': this.state.todoText
            });
            this.setState({ todoArray: this.state.todoArray });
            this.setState({todoText:''});
        }
    }
    deleteTodo(key){
        this.state.todoArray.splice(key, 1);
        this.setState({todoArray: this.state.todoArray});
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
        backgroundColor: 'blue'
    },
});