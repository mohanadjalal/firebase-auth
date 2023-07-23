import React, { useState } from 'react';
import {TextInput ,  View, StyleSheet , Button } from 'react-native';
import  {FIREBASE_AUTH} from '../../firebase.config'
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = () => {
  const auth = FIREBASE_AUTH;

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth , email);
      alert('Password Reset Email Sent. Please check your email for further instructions.');
    } catch (error) {
        
      console.log('Error sending password reset email:', error);
      alert('Failed to send password reset email. Please try again.');
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
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        loading={isLoading}
        buttonStyle={styles.button}
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
  inputContainer: {
    borderBottomWidth: 0,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
  },
});

export default ResetPassword;
