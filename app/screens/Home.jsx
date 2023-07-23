import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase.config';

const Home = ({ navigation }) => {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut()
      .then(() => {
        // Redirect to the login screen after logout
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log('Error logging out:', error);
      });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Log Out" onPress={handleLogout} color="gray" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF', // Updated background color
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold', // Added font weight
    marginBottom: 20, // Added margin at the bottom
  },
});

export default Home;
