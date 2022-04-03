import React, {useState, useContext, useEffect} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, Text} from 'react-native';
import { TextInput as Input, Button} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

const Login = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)
  useEffect(() => UserProvider.UserProvided.setUserDetails(null), [])

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

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
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
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
        onChangeText={text => setPassword({ value: text, error: '' })}
        secureTextEntry
      />
    </View>
    <Button style={styles.button} icon="account-key" mode="contained" onPress={console.log("Submitted")}>
        Login
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