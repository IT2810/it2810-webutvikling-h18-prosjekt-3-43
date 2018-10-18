import { createStackNavigator } from 'react-navigation'
import Calendar from './Calendar'
import Contacts from './Contacts'
import Todos from './Todos'

const AppNavigator = createStackNavigator({
    Calendar: { screen: Calendar },
    Contacts: { screen: Contacts },
    Todos: { screen: Todos }
})

export default AppNavigator