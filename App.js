import React from "react";
import { View, StyleSheet } from "react-native";
// import Splash from './Components/Splash/Splash';
// import Monitoring from './Components/Monitoring/Monitoring';
// import Onboarding from './Components/Onboarding/Onboarding';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import HomeScreen from "./Components/Home/HomeScreen";
import AddHarvest from "./Components/AddHarvest/AddHarvest";
import ForgotPassword from "./Components/Forgot/ForgotPassword";
import StackNavigator from "./Components/StackNavigationOne/StackNavigator";
// react-native link react-native-gesture-handlerr
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Profile from "./Components/Profile/Profile";
import EditProfile from "./Components/EditProfile/EditProfile";
import DropDown from "./Components/DropDown/DropDown";
import ThemeProvider from "./Components/Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      {/* <Splash/> */}
      {/* <Monitoring/> */}
      {/* <Onboarding/> */}
      {/* <Login />  */}
      {/* <SignUp /> */}
      {/* <HomeScreen/> */}
      {/* <AddHarvest/> */}
      {/* <ForgotPassword /> */}
      <StackNavigator />
      {/* <DropDown/> */}
      {/* <Profile/> */}
      {/* <Profile/> */}
      {/* <EditProfile /> */}
      {/* <DropDown/> */}
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })
