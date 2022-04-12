import React, {useState, useContext, useEffect} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, Text, Keyboard} from 'react-native';
import { TextInput as Input, Button, RadioButton } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';


const generateImages = (username) => {
  let images = []
  let url = "https://picsum.photos/seed/";
  for(let i = 0; i < 20; i++){
    let image = {src: url+username+i+"/400/400", width: 400, height: 400}
    images.push(image);
  }
  return images;
}


const Registration = ({route, navigation}) => {
  
  const UserProvider = useContext(AppContext)
  let { user } = route.params;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const memories = userAccount.memories;

  const [imageURL, setImageURL] = useState('/');
  const [category, setCategory] = useState('travelling');
  const [submitButton, setSubmitButton] = useState(false);
  const [submitError, setSubmitError] = useState('');
  

  const imageSubmit = () => {
    Keyboard.dismiss;
    setSubmitButton(true);
    setTimeout(function() {
        if(imageURL == '/' || imageURL == null){
            setSubmitError("Must Enter Something to Submit")
        }else{
          if(category === 'travelling'){
            memories['Travelling'].push(imageURL)
            setImageURL('/');
            navigation.navigate('Memories')
          }else if(category === 'home')
            memories['Home_Country'].push(imageURL)
            setImageURL('/');
            navigation.navigate('Memories')
        }
      setSubmitButton(false);
    }, 800);
  }

  const updateImageURL = (text) => {
    const baseURL = 'https://picsum.photos/seed/';
    if(text !== '' || text !== null){
        setImageURL(baseURL+text+'/400/400');
    }
  }

  const RegisterPage = () => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>Add New Memory</Text>
      <Text style={styles.subheader}>Enter any text, a random image will be generated</Text>
      <View style={styles.formContainer}>
      <Text style={styles.radio}>Pick your album</Text>
      <RadioButton.Group onValueChange={value => setCategory(value)} value={category}>
        <RadioButton.Item label="Travelling Memories" value="travelling" />
        <RadioButton.Item label="Home Country Memories" value="home" />
      </RadioButton.Group>
      <Input
        style={styles.input}
        selectionColor='#004ae6'
        underlineColor="transparent"
        mode="outlined"
        label="Text"
        returnKeyType="next"
        value={imageURL.value}
        onChangeText={text => updateImageURL(text)}
        autoCapitalize="none"
        keyboardType="default"
      />
      {submitError ? <Text style={styles.error}>{submitError}</Text> : null}
    </View>
    {submitButton ? <Button style={styles.button} loading={true} /> : <Button style={styles.button} icon="image-plus" mode="contained" onPress={imageSubmit}>
        Add Memory
    </Button>}
    <Image style={styles.image} source={{uri: imageURL}}/>
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
    width: 300,
    height: 300,
    marginBottom: 12,
  },
  radio: {
    fontSize: 12,
    lineHeight: 26,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 14,
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
  subheader: {
    fontSize: 19,
    lineHeight: 26,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 14,
  },
  container: {
    flex: 1,
    paddingTop: 80,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
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
