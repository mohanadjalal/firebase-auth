//import liraries
import React, { useState } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
} from "react-native";

import { FIREBASE_AUTH } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// create a component
const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      alert("welcome !! ");
    } catch (error) {
      console.error(error);
      alert(error.message);
  
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      alert("the account created successfully !! ");

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.btnContainer}>
          <Button
            title="Login"
            buttonStyle={styles.loginButton}
            onPress={handleLogin}
          />
          <Text>Or </Text>

          <Button
            title="Create Account"
            buttonStyle={styles.loginButton}
            onPress={handleRegister}
          />
          <Text>  </Text>

          
        <Button
            title="forget password?"
            buttonStyle={styles.loginButton}
            onPress={()=> navigation.navigate('reset-password')}
          />

        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#f9f9f9",
    },
    inputContainer: {
      width: "100%",
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 15, // Updated
      paddingVertical: 8, // Updated
    },
    input: {
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
      paddingBottom: 10,
      paddingTop: 10,
      paddingHorizontal: 8, // Updated
      marginVertical: 5, // Updated
    },
    loginButton: {
      padding: 15,
      marginBottom: 10, // Updated
      width: "100%", // Updated to take full width
      borderRadius: 5, // Updated
      backgroundColor: "#007BFF", // Updated background color
      marginVertical: 5, // Updated

    },
    btnContainer: {
      width: "100%",
      flexDirection: "column", // Updated to display buttons vertically
      alignItems: "center", // Updated to center buttons
      justifyContent: "space-evenly",
    },
  });

//make this component available to the app
export default Login;
