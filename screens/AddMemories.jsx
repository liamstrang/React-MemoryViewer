import React, {useState, useContext} from 'react';
import { View, KeyboardAvoidingView, Image, Text, Keyboard} from 'react-native';
import { TextInput as Input, Button, RadioButton } from 'react-native-paper';
import { AppContext } from '../services/appContext';

//AddMemories Styling
import styles from '../styles/addMemoriesStyles'

/**
@author Liam Strang - 45426392

@description Screen to display the "Add Memories" page. 
*/


const AddMemories = ({route, navigation}) => {
  
  //Fetch Current User Profile
  const UserProvider = useContext(AppContext)
  let { user } = route.params;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const memories = userAccount.memories;

  const [imageURL, setImageURL] = useState('/');
  const [category, setCategory] = useState('travelling');
  const [submitButton, setSubmitButton] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [text, setText] = useState('')
  const changeHandler = (text) => {
      updateImageURL(text)
      setText(text)
  }
  
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
            setText('')
            navigation.navigate('Memories')
          }else if(category === 'home'){
            memories['Home_Country'].push(imageURL)
            setImageURL('/');
            setText('')
            navigation.navigate('Memories')
          }
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
      value={text}
      onChangeText={changeHandler}
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

export default AddMemories
