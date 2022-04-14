import React, {useState, useContext} from 'react';
import { View, KeyboardAvoidingView, Image, Text} from 'react-native';
import { TextInput as Input, Button} from 'react-native-paper';
import { AppContext } from '../services/appContext';

//Registration Styling
import styles from '../styles/registerStyles'

//Generate Images Function
import GenerateImages from '../services/generateImages';

/**
@author Liam Strang - 45426392

@description Screen to display the "Registration" page. 
*/

const Registration = ({navigation}) => {
  
  //Fetch all Users
  const UserProvider = useContext(AppContext)

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const[signupError, setSignupError] = useState('')
  const[submitButton, setSubmitButton] = useState(false)

  const loginSubmit = () => {
    setSubmitButton(true);
    setTimeout(function() {
      if(UserProvider.users.find(u => u.username === username)){
        setSignupError("Username Already Exists")
      }else{
        UserProvider.users.push({"username": username, "password": password, "avatar": "https://robohash.org/"+username, "memories": GenerateImages(username)})
        navigation.navigate('Login')
      }
      setSubmitButton(false);
    }, 800);
  }

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
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={text => setusername(text)}
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="username"
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
        textContentType="password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {signupError ? <Text style={styles.error}>{signupError}</Text> : null}
    </View>
    {submitButton ? <Button style={styles.button} loading={true} /> : <Button style={styles.button} icon="account-key" mode="contained" onPress={loginSubmit}>
        Register
    </Button>}
    </KeyboardAvoidingView>
  )
}

export default Registration
