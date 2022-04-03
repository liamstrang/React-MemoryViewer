import React, {useState, useContext, useEffect} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, Text} from 'react-native';
import { TextInput as Input, Button} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';


const Registration = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)

  console.log(UserProvider.users)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const[signupError, setSignupError] = useState('')
  const[submitButton, setSubmitButton] = useState(false)

  const loginSubmit = () => {
    setSubmitButton(true);
    setTimeout(function() {
      if(UserProvider.users.find(u => u.email === email)){
        setSignupError("Email Already Exists")
      }else{
        UserProvider.users.push({"email": email, "password": password, "avatar": "https://robohash.org/"+email})
        navigation.navigate('Login')
      }
      setSubmitButton(false);
    }, 800);
  }

  const RegisterPage = () => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.header}>Register</Text>
      <View style={styles.formContainer}>
      <Input
        style={styles.input}
        selectionColor='#004ae6'
        underlineColor="transparent"
        mode="outlined"
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      </View>
      <View style={styles.formContainer}>
      <Input
        style={styles.input}
        selectionColor='#004ae6'
        underlineColor="transparent"
        mode="outlined"
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {signupError ? <Text style={styles.error}>{signupError}</Text> : null}
    </View>
    {submitButton ? <Button style={styles.button} loading={true} /> : <Button style={styles.button} icon="account-key" mode="contained" onPress={loginSubmit}>
        Login
    </Button>}
    </KeyboardAvoidingView>
    
    )
  }
 
  return (
    <>
        {RegisterPage()}
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    marginVertical: 12,
  },
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
  input: {
    backgroundColor: 'white',
  },
  header: {
    fontSize: 26,
    color: '#004ae6',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  error: {
    fontSize: 14,
    color: 'red',
    paddingHorizontal: 4,
    paddingTop: 4,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Registration
