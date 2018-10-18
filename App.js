import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import Calendar from './src/components/Calendar'
import Contacts from './src/components/Contacts'
import Todos from './src/components/Todos'

class Home extends React.Component {
    static navigationOptions = {
        title: 'Planner Home'
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        Todos: {
            screen: Todos,
            navigationOptions: {
                drawerLabel: 'Todos'
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

                // export default class App extends React.Component {
                //   onDrawerOpen() {
                //     NavigationActions.navigate('DrawerOpen')
                //   }

                //   render() {
                //     return (
                //       <View style={styles.container}>
                //         <StatusBarBackground style={{backgroundColor:'slateblue'}}/>
                //         <Header onDrawerOpen={this.onDrawerOpen.bind(this)} />
                //         <Drawer />
                //       </View>
                //     );
                //   }
                // }