import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View} from 'react-native';
import { Headline } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

import GridImageView from 'react-native-grid-image-viewer';


const Memories = ({route, navigation}) => {

  const UserProvider = useContext(AppContext)
  let { user } = route.params;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const memories = userAccount.memories;

  console.log(memories)

  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);

  const ProfilePage = () => {
    return (
      <>
      <Text style={styles.headline_text}>Welcome {usernameFixed}</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>
        <GridImageView data={memories} />
        </>
    )
  }
 
  return (
    <>
        {ProfilePage()}
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
});

export default Memories
