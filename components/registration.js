import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

const Registration = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)
  useEffect(() => UserProvider.UserProvided.setUserDetails(null), [])

  const RegistrationPage = () => {
    return (
      <></>
    )
  }
 
  return (
    <>
        {RegistrationPage()}
    </>
  );
}

export default Registration