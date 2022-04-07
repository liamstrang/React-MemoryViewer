import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Button} from 'react-native';
import { Headline } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';



const DisplayMemories = (user) => {
  let images = user.memories;
  console.log(images)
  return(
    <GridImageView data={images} />
  )
}

const Profile = ({route, navigation}) => {

  const UserProvider = useContext(AppContext)
  let { user } = route.params;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const memories = userAccount.memories;


  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);
  const ProfilePage = () => {
    return (
      <KeyboardAvoidingView>
        <Text style={styles.header}>Welcome {usernameFixed}</Text>
        <Text style={styles.subheader}>Here are your memories</Text>
      </KeyboardAvoidingView>
    )
  }
 
  return (
    <>
        {ProfilePage()}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: '#004ae6',
    fontWeight: 'bold',
    paddingVertical: 14,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 19,
    lineHeight: 26,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default Profile
