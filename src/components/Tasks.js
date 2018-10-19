import React from 'react';
import { Text, TextInput, StyleSheet, Button, View, ScrollView, Modal, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import ActionButton from 'react-native-action-button'
import Task from './Task';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            taskArray: [],
            taskText: '',
            modalVisible: false,
            savePos: false,
            latitude: 37,
            longitude: -122,
            error: null,
            marker: null
        };
        this.getTasksFromStorage();
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                })
            },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    render() {
        let tasks = this.state.taskArray.map((val, key)=>{
            return <Task key={key} keyval={key} val={val}
                        completeMethod={() => this.completeTask(key)}
                        deleteMethod={() => this.deleteTask(key)}
                    />
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
                        />
                        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                        <MapView
                            style={{height: 300}}
                            initialRegion={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                        >
                            {
                                this.state.marker ?
                                <Marker
                                    coordinate={this.state.marker.latlng}
                                />
                                : null
                            }
                        </MapView>
                        <Button
                            title="Add current location"
                            onPress={this.addLocation.bind(this)}
                        />
                        <Button
                            title='Save'
                            onPress={this.addTask.bind(this)}
                        />
                    </View>
                </Modal>

                <ScrollView style={styles.scrollContainer}>
                    {tasks}
                </ScrollView>

                <ActionButton buttonColor='slateblue' onPress={() => { 
                    this.setModalVisible(true);
                }}/>
            </View>
        );
    }
    addTask(){
        if(this.state.taskText){
            var d = new Date();
            this.state.taskArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'task': this.state.taskText,
                'isDone': false,
                'lat': this.state.savePos ? this.state.latitude : null,
                'lng': this.state.savePos ? this.state.longitude : null
            });
            this.setState({ taskArray: this.state.taskArray });
            this.setState({taskText:''});
            this.setModalVisible(false);
        }
        this.saveTasksToStorage(this.state.taskArray)
    }
    addLocation() {
        const marker = new Marker()
        marker.latlng = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }
        this.setState({ savePos: true, marker })
    }

    completeTask(key){
        this.state.taskArray[key].isDone = true;
        this.setState({taskArray: this.state.taskArray})
        this.saveTasksToStorage()
    }
    deleteTask(key){
        this.state.taskArray.splice(key, 1);
        this.setState({taskArray: this.state.taskArray});
        this.saveTasksToStorage()
    }

    saveTasksToStorage(tasks) {
        if (typeof tasks === 'undefined') tasks = this.state.taskArray
        try {
            AsyncStorage.setItem('tasks', JSON.stringify(tasks)).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    async getTasksFromStorage() {
        try {
            AsyncStorage.getItem('tasks')
            .then((req) => {
                if (req != undefined) {
                    this.setState({taskArray: JSON.parse(req)});
                    console.log(JSON.parse(req))
                } else {
                    this.setState({taskArray: []});
                }
            })
        } catch (err) {
        }
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
    textInput: {
        fontSize: 30,
        padding: 20,
        paddingRight: 100,
        backgroundColor: 'white',
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
});