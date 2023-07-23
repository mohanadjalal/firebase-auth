//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase.config';
const auth = FIREBASE_AUTH;
// create a component
const Home = ({router}) => {
 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button title="LogOut" onPress={()=>FIREBASE_AUTH.signOut()} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    text: { 
        color:'white' , 
        fontSize:24,
    }
});

//make this component available to the app
export default Home;
