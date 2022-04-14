import React, {useContext} from 'react';
import { Text, KeyboardAvoidingView, View, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { AppContext } from '../services/appContext';

//Profile Styling
import styles from '../styles/profileStyles'

/**
@author Liam Strang - 45426392

@description Screen to display the "Profile" page. 
*/

const UserAccount = ({route, navigation}) => {

  //Fetch Current User Profile
  const UserProvider = useContext(AppContext)
  let user = route.params.user;
  const userAccount = UserProvider.users.find(u => u.username === user)
  const profileImage = userAccount.avatar;

  let usernameFixed = user.charAt(0).toUpperCase() + user.slice(1);

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

export default UserAccount
