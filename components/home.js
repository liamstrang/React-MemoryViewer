import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';
import { Button, Headline} from 'react-native-paper';

const Home = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)

  const HomePage = () => {
    return (
      <>
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

        <Button style={styles.registerButton} labelStyle={{color: '#004ae6'}} icon="account-plus" mode="outlined" onPress={() => navigation.navigate("UserAccount", {user: 'liam'})}>
          Profile
        </Button>
      </KeyboardAvoidingView>
         
         </>
    )
  }
 
  return (
    <>
        {HomePage()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#004ae6',
  },
  registerButton: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
  header: {
    fontSize: 26,
    color: '#004ae6',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  subheader: {
    fontSize: 16,
    lineHeight: 26,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default Home
