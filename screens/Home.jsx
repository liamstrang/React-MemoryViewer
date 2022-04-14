import React from 'react';
import {KeyboardAvoidingView, Image, Text} from 'react-native';
import {Button} from 'react-native-paper';

/**
@author Liam Strang - 45426392

@description Screen to display the "Home" page. 
*/

//Homepage Styling
import styles from '../styles/homeStyles'

const Home = ({navigation}) => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <Text style={styles.header}>Picture Collections</Text>
        <Text style={styles.subheader}>View and sort your favourite images!</Text>
        <Button style={styles.loginButton} icon="account-key" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </Button>
        <Button style={styles.registerButton} labelStyle={{color: '#004ae6'}} icon="account-plus" mode="outlined" onPress={() => navigation.navigate("Registration")}>
          Register
        </Button>
      </KeyboardAvoidingView>
    )
}

export default Home
