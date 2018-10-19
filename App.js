import React from 'react';
import { Text, StyleSheet, View, AsyncStorage } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import Calendar from './src/components/Calendar'
import Contacts from './src/components/Contacts'
import Tasks from './src/components/Tasks'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: null,
            initialLatitude: 37,
            initialLongitude: -122,
            error: null
        }
    }

    static navigationOptions = {
        title: 'Planner Home'
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    initialLatitude: position.coords.latitude,
                    initialLongitude: position.coords.longitude,
                    error: null
                })
            },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        try {
            AsyncStorage.getItem('tasks')
            .then((req) => {
                if (req != undefined) {
                    this.setState({tasks: JSON.parse(req)});
                } else {
                    this.setState({tasks: null});
                }
            })
        } catch (err) {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to your very own, fantastic planner.</Text>
                {
                    this.state.tasks ?
                    <View style={{ width: '100%' }}>
                        <Text style={styles.todos}>Here is a map of your todos. Very nice.</Text>
                        <MapView
                            style={{ height: 300 }}
                            initialRegion={
                                {
                                    latitude: this.state.initialLatitude,
                                    longitude:  this.state.initialLongitude,
                                    latitudeDelta: 1,
                                    longitudeDelta: 1
                                }
                            }
                        >
                            {
                                this.state.tasks.map((task, key) => {
                                    return (
                                        <Marker
                                            key={key}
                                            keyval={key}
                                            coordinate={{
                                                latitude: task.lat || 37,
                                                longitude: task.long || -122
                                            }}
                                            title={task.title}
                                        />
                                    )
                                })
                            }
                        </MapView>
                    </View>
                    : null
                }
            </View>
        );
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                drawerLabel: 'Planner Home'
            }
        },
        Calendar: {
            screen: Calendar,
            navigationOptions: {
                drawerLabel: 'Calendar'
            }
        },
        Contacts: {
            screen: Contacts,
            navigationOptions: {
                drawerLabel: 'Contacts'
            }
        },
        Tasks: {
            screen: Tasks,
            navigationOptions: {
                drawerLabel: 'Tasks'
            }
        },
    }
)
DrawerNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName
    return {
        headerTitle
    }
}

class MenuButton extends React.Component {
    render() {
        return (
            <FontAwesome style={{marginLeft: 10}} name="bars" size={32} color="white" onPress={() => this.props.navigation.openDrawer()}/>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: DrawerNavigator,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            headerStyle : { backgroundColor: 'slateblue' },
            headerLeft : <MenuButton navigation={navigation} />,
        }),
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 32
    },
    welcome: {
        fontSize: 18
    },
    todos: {
        marginTop: 24,
        marginBottom: 8
    }
});

export default AppNavigator