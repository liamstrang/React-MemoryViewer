import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../services/appContext';

const Profile = ({navigation}) => {
  
  const UserProvider = useContext(AppContext)
  useEffect(() => UserProvider.UserProvided.setUserDetails(null), [])

  const ProfilePage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.imageBorder}>
          <View style={styles.formButtons}>
                <TouchableOpacity title="Login" style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={{color: "#FFFFFF", lineHeight: 15}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity title="Register" style={styles.registerButton} onPress={() => navigation.navigate("Register")}>
                    <Text style={{color: "#FFFFFF", lineHeight: 15}}>Register</Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
    )
  }
 
  return (
    <>
        {ProfilePage()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  image: {
    width: 308,
    height: 402,
    overflow: 'hidden',
  },

  login: {
    marginLeft: 10,
    backgroundColor: "#EEB743",
  },

  formButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},

loginButton: {
    backgroundColor:"#75787D",
    width: 80,
    marginTop: 130,
    padding: 10,
    borderRadius: 10,
    marginRight: 30,
  
},

registerButton: {
    backgroundColor:"#75787D",
    marginRight: 15,
    width: 80,
    marginTop: 130,
    padding: 10,
    borderRadius: 10,

},

});

export default Profile