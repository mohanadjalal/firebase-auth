import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase.config";
import ResetPassword from "./app/screens/ResetPassword.jsx";
const Stack = createNativeStackNavigator();
const authStack = createNativeStackNavigator();
const auth = FIREBASE_AUTH;

const AuthLayout = () => {
  return (
   
      <authStack.Navigator initialRouteName="Login">
        <authStack.Screen name="Home" component={Home}   />
      </authStack.Navigator>
   
  );

 
};
const GuestLayout = ()=> { 
  return( <Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="login" component={Login} />
  <Stack.Screen name="reset-password" component={ResetPassword} />
</Stack.Navigator>)
}
export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (u) => {
      setUser(u);
    });
  });
  return (
    <NavigationContainer>
      {user ? (
        AuthLayout()
      ) : (
       GuestLayout()
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
