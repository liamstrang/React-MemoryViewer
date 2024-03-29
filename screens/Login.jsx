import React, { useState, useContext } from "react";
import { View, KeyboardAvoidingView, Image, Text } from "react-native";
import { TextInput as Input, Button } from "react-native-paper";
import { AppContext } from "../services/appContext";

import styles from "../styles/loginStyles";

/**
@author Liam Strang - 45426392

@description Screen to display the "Login" page. 
*/

const Login = ({ navigation }) => {
  //Fetch Current Users
  const UserProvider = useContext(AppContext);

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [submitButton, setSubmitButton] = useState(false);

  const loginSubmit = () => {
    setSubmitButton(true);
    setTimeout(function () {
      if (
        UserProvider.users.find(
          (u) => u.username === username && u.password === password
        )
      ) {
        navigation.navigate("UserAccount", { user: username });
      } else {
        setLoginError("Incorrect Username or Password");
      }
      setSubmitButton(false);
    }, 800);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <Text style={styles.header}>Login</Text>
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          selectionColor="#004ae6"
          underlineColor="transparent"
          mode="outlined"
          label="username"
          returnKeyType="next"
          value={username.value}
          onChangeText={(text) => setusername(text)}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="username"
          keyboardType="default"
        />
      </View>
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          selectionColor="#004ae6"
          underlineColor="transparent"
          mode="outlined"
          label="Password"
          textContentType="password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        {loginError ? <Text style={styles.error}>{loginError}</Text> : null}
      </View>
      {submitButton ? (
        <Button style={styles.button} loading={true} />
      ) : (
        <Button
          style={styles.button}
          icon="account-key"
          mode="contained"
          onPress={loginSubmit}
        >
          Login
        </Button>
      )}
      <Button
        style={styles.button}
        icon="account-plus"
        mode="outlined"
        onPress={() => navigation.navigate("Registration")}
      >
        Need an Account?
      </Button>
    </KeyboardAvoidingView>
  );
};

export default Login;
