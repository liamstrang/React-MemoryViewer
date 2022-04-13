import React, {useContext} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, Image} from 'react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';


const UserAccount = ({route, navigation}) => {

  const UserProvider = useContext(AppContext)
  let user = route.params.user;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const profileImage = userAccount.avatar;

  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);

  const ProfilePage = () => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>Welcome {usernameFixed}!</Text>
        <View>
            <Image style={styles.image} source={{uri: profileImage}}/>
        </View>
        <Text style={styles.subheader}>This is your profile page where you can view your memory albums!</Text>
        <Text style={styles.subheader}>For the purpose of this assignment, each user is pre-populated with 20 random images</Text>
        
        <Button style={styles.button} icon="account-key" mode="contained" onPress={() => navigation.navigate('Home')}>
        Logout
        </Button>
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
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
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
});

export default UserAccount
