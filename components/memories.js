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
    if(cat === 'Home Country'){
      setImages('')
      setImages(memories.Home_Country);
    }
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
          <RadioButton.Item label="Home Country Memories" value="Home Country" />
        </RadioButton.Group>
        <GridImageView data={getImages} />
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
    marginVertical: 10,
  },
});

export default Memories
