import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

import GridImageView from 'react-native-grid-image-viewer';
import { Button, RadioButton } from 'react-native-paper';



const Memories = ({route, navigation}) => {

  const UserProvider = useContext(AppContext)
  let user = route.params.user;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const memories = userAccount.memories;

  const [getImages, setImages] = useState('')
  const [category, setCategory] = useState('travelling');

  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);

  const getCategory = (cat) => {
    setCategory(cat)
    if(cat === 'Travelling'){
      setImages('');
      setImages(memories.Travelling);
    }
    if(cat === 'Home_Country'){
      setImages('')
      setImages(memories.Home_Country);
    }
  }

  const deleteCategory = (category) => {
    delete memories[category]
    setImages('')
  }

  const MemoryPage = () => {
    return (
      <>
      <Text style={styles.headline_text}>{usernameFixed}'s Memories</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>
        <RadioButton.Group onValueChange={value => getCategory(value)} value={category}>
          <RadioButton.Item label="Travelling Memories" value="Travelling" />
          <RadioButton.Item label="Home Country Memories" value="Home_Country" />
        </RadioButton.Group>
        <Button style={styles.button} icon="delete" mode="contained" onPress={() => deleteCategory(category)}>
        Delete Images in Category
        </Button>
        {getImages ? <GridImageView data={getImages} /> : <Text style={styles.header}>No Images</Text>}
        </>
        
    )
  }
 
  return (
    <>
        {MemoryPage()}
    </>
  );
}

const styles = StyleSheet.create({
  headline_text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  header: {
    fontSize: 26,
    color: '#004ae6',
    fontWeight: 'bold',
    paddingVertical: 14,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'black',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    width: '80%',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default Memories
