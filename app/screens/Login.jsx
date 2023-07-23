import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Animated,
  Easing,
} from "react-native";

import { FIREBASE_AUTH } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import getErrorMessage from "../utils/getFireBaseError";

const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const buttonOpacity = useState(new Animated.Value(1))[0];

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome!");
    } catch (error) {
      console.error(error);
      alert(getErrorMessage(error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (error) {
      console.error(error);
      alert(getErrorMessage(error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleButtonPress = () => {
    Animated.timing(buttonOpacity, {
      toValue: 0.2,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonRelease = () => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
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
        <Animated.View
          style={[
            styles.buttonContainer,
            { opacity: buttonOpacity, transform: [{ scale: buttonOpacity }] },
          ]}
        >
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            onPressIn={handleButtonPress}
            onPressOut={handleButtonRelease}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
            onPressIn={handleButtonPress}
            onPressOut={handleButtonRelease}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate("reset-password")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5f2ff",
  },
  formContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007BFF",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  loginButton: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  registerButton: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#FF5722",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#007BFF",
    fontSize: 16,
  },
});

export default Login;
