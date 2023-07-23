import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';
import getErrorMessage from '../utils/getFireBaseError';

const ResetPassword = ({ route, navigation }) => {
  const auth = FIREBASE_AUTH;

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert(
        'Password Reset Email Sent. Please check your email for further instructions.'
      );
      navigation.navigate('login')
    } catch (error) {
        console.error(  error);
        alert(getErrorMessage(error.message));
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        loading={isLoading}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#007BFF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResetPassword;
