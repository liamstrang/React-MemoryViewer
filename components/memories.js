import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View} from 'react-native';
import { Headline } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

import PhotoAlbum from "react-photo-album";


const Memories = ({route, navigation}) => {

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
        <View style={{padding: 20}}>
          <PhotoAlbum layout="rows" photos={memories} />
        </View>
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

export default Memories
