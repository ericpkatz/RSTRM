import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function Setting() {
    return (
        <View style={styles.container}>
            <Text>Filter some markers...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})
