import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
const ImageOne = require("../../assets/authanticationImage.png");
import InputText from "../InputText/InputText";
import MyButton from "../MyButton/MyButton";
import { TextInput } from "react-native-paper";
import SocialMedia from "../SocialMedia/SocialMedia";
import { ThemeContext } from "../Context/ThemeContext";
// import { ScrollView } from "react-native-gesture-handler";
const facebook = require("../../assets/facebook (1).png");
const google = require("../../assets/google.png");
import RNPickerSelect from "react-native-picker-select";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const SignUp = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const dropdownItems = [
    { label: "Farmer specialist", value: "farmerSpecialist" },
    { label: "Farmer", value: "farmer" },
    { label: "Customer", value: "customer" },
  ];
  const {
    signUp,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    validForm,
    fullName,
    setFullName,
    userType,
    setUserType,
  } = useContext(ThemeContext);
  const handleSignUp = async () => {
    try {
      if (validForm() === true) {
        const response = await signUp(email, password, fullName, userType);
        navigation.navigate("Login")
        //console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: "white",
          paddingTop: 65,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            width: "40%",
            alignSelf: "center",
          }}
        >
          <Image source={ImageOne} />
        </View>
        <View style={{ backgroundColor: "white", marginHorizontal: 10 }}>
          <Text style={{ fontWeight: 400, fontSize: 25 }}>Sign Up</Text>
          <Text
            style={{
              color: "#BFBBBB",
              paddingLeft: 20,
              fontSize: 15,
            }}
          >
            create an account to continue
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: "white",
            height: "50%",
          }}
        >
          <InputText
            label="Full Name"
            theme={{ colors: { primary: "#BFBBBB" } }}
            value={fullName}
            onChangeText={setFullName}
            left={<TextInput.Icon icon="account-circle" />}
          />
          <InputText
            theme={{ colors: { primary: "#BFBBBB" } }}
            label="Email"
            left={<TextInput.Icon icon="email" />}
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? (
            <Text style={{ color: "red", fontSize: 12, marginHorizontal: 60 }}>
              {emailError}
            </Text>
          ) : null}
          <InputText
            label="Password"
            theme={{ colors: { primary: "#BFBBBB" } }}
            secureTextEntry={true}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon="eye" />}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError ? (
            <Text style={{ color: "red", fontSize: 12, marginHorizontal: 60 }}>
              {passwordError}
            </Text>
          ) : null}
          <InputText
            label="Confirm password"
            theme={{ colors: { primary: "#BFBBBB" } }}
            secureTextEntry={true}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon="eye" />}
          />
          <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
            <RNPickerSelect
              value={userType}
              onChangeText={setUserType}
              placeholder={{ label: "Select...", value: null }}
              items={dropdownItems}
              onValueChange={(value) =>{setUserType(value)}}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderWidth: 2,
                  borderColor: "red",
                  borderRadius: 4,
                  color: "black",
                  paddingRight: 30,
                  marginBottom: 10,
                  backgroundColor: "red",
                  borderStyle: "dotted", 
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderWidth: 0.5,
                  borderColor: "purple",
                  borderRadius: 8,
                  color: "black",
                  paddingRight: 30,
                  marginBottom: 10,
                  borderWidth: 10,
                  borderBottomColor: "gray",
                  borderBottomWidth: 10,
                  // backgroundColor: 'purple',
                  borderStyle: "dashed",
                  // margin:10
                },
              }}
            />
          </View>
          <MyButton
            onPress={() => {
              console.log("");
              handleSignUp();
              // navigation.navigate("Login");
              console.log('navigation.navigate')
            }}
            title="Sign up"
            style={{
              backgroundColor: "#4BA26A",
              height: "12%",
              // marginTop: 3,
              borderRadius: 8,
              justifyContent: "center",
              marginTop: 25,
            }}
          />
          {/* </View> */}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "whit",
            // marginVertical: 10,
          }}
        >
          <View
            style={{
              //  backgroundColor:'green',
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              margin: 18,
              width: 100,
            }}
          ></View>
          <Text style={{ color: "black", marginTop: 5, fontSize: 18 }}>
            or sign in with
          </Text>
          <View
            style={{
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              margin: 18,
              width: 100,
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 53,
            // width:'80%',
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#3B5998",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={facebook} style={{ width: "50%", height: "50%" }} />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "white",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={google} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 18,
            gap: 20,
          }}
        >
          <Text style={{ color: "#BFBBBB" }}>Already have an account?</Text>
          <Pressable
            onPress={() => {
              console.log("Already have an account");
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#4BA26A", fontWeight: "800" }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
