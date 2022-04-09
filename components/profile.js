import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, Image} from 'react-native';
import { Button, Headline } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';


const Memories = ({route, navigation}) => {

  const UserProvider = useContext(AppContext)
  let user = route.params.user;
  console.log(user)
  const userAccount = UserProvider.users.find(u => u.username === user)
  const profileImage = userAccount.avatar;

  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);

    const loadMemories = () => {
        setSubmitButton(true);
        setTimeout(function() {
            navigation.navigate('Memories', {user: userAccount.username})
        }, 800);
    }

    const[submitButton, setSubmitButton] = useState(false)

  const ProfilePage = () => {
    return (
      <KeyboardAvoidingView>
        <Text style={styles.header}>Welcome {usernameFixed}!</Text>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: profileImage}}/>
        </View>
        {submitButton ? <Button style={styles.button} loading={true} /> : <Button style={styles.button} icon="account-key" mode="contained" onPress={loadMemories}>
        View Memories
        </Button>}      
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
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
});

export default Memories
