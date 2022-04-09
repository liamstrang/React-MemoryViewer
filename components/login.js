import React, {useState, useContext, useEffect} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, Text} from 'react-native';
import { TextInput as Input, Button} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';


const Login = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const[loginError, setLoginError] = useState('')
  const[submitButton, setSubmitButton] = useState(false)

  const loginSubmit = () => {
    setSubmitButton(true);
    setTimeout(function() {
      if(UserProvider.users.find(u => u.username === username) && UserProvider.users.find(u => u.password === password)){
        navigation.navigate('Profile', {user: username})
      }else{
        setLoginError("Incorrect Username or Password")
      }
      setSubmitButton(false);
    }, 800);
  }

  const LoginPage = () => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.header}>Login</Text>
      <View style={styles.formContainer}>
      <Input
        style={styles.input}
        selectionColor='#004ae6'
        underlineColor="transparent"
        mode="outlined"
        label="username"
        returnKeyType="next"
        value={username.value}
        onChangeText={text => setusername(text)}
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="usernameAddress"
        keyboardType="default"
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
      {loginError ? <Text style={styles.error}>{loginError}</Text> : null}
    </View>
    {submitButton ? <Button style={styles.button} loading={true} /> : <Button style={styles.button} icon="account-key" mode="contained" onPress={loginSubmit}>
        Login
    </Button>}
    <Button style={styles.button} icon="account-plus" mode="outlined" onPress={() => navigation.navigate('Registration')}>
        Need an Account?
    </Button>
    </KeyboardAvoidingView>
    
    )
  }
 
  return (
    <>
        {LoginPage()}
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

export default Login
