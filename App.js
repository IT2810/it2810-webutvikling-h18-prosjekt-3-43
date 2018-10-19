import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import Calendar from './src/components/Calendar'
import Contacts from './src/components/Contacts'
import Tasks from './src/components/Tasks'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Planner Home'
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Home</Text>
            <ActionButton>
                <ActionButton.Item buttonColor='#9b59b6' title="New task" onPress={() => console.log("task tapped!")}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#FC5E60' title="New contact" onPress={() => console.log("contacts tapped!")}>
                    <Icon name="md-person-add" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#4A90E2' title="New event" onPress={() => console.log("calendar tapped!")}>
                    <Icon name="md-calendar" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
            </View>
        );
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
});

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

export default AppNavigator