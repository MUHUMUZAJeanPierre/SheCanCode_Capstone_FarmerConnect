import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Login
import SignUp from "../SignUp/SignUp";
import HomeScreen from "../Home/HomeScreen";
import AddHarvest from "../AddHarvest/AddHarvest";
import ForgotPassword from "../Forgot/ForgotPassword";
import Login from "../Login/Login";
import Splash from "../Splash/Splash";
import MyTab from "../MyTab/MyTab";
import EditProfile from "../EditProfile/EditProfile";
// import Splash from "../Splash/Splash";
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="splash" component={<Splash />} /> */}
        {/* <Stack.Screen options={{headerShown: false }} name="SignUp" component={SignUp} /> */}
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="MyTab" component={MyTab} />
        <Stack.Screen options={{headerShown:false}} name="EditProfile" component={EditProfile} />
        <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default StackNavigator;
