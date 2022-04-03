import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Headline } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

const Profile = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)

  const ProfilePage = () => {
    return (
      <Headline>Welcome {UserProvider.users.email}</Headline>
    )
  }
 
  return (
    <>
        {ProfilePage()}
    </>
  );
}

export default Profile
