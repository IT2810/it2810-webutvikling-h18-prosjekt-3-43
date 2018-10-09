import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/Header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Header</Text>
            </View>
        )
    }
}