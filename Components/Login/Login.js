import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
const imageOne = require("../../assets/authanticationImage.png");
const facebook = require("../../assets/facebook (1).png");
const google = require("../../assets/google.png");
import InputText from "../InputText/InputText";
import MyButton from "../MyButton/MyButton";
import { TextInput } from "react-native-paper";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FIREBASE_AUTH } from "../Firebase/FirebaseOne";
import { ThemeContext } from "../Context/ThemeContext";
import RNPickerSelect from "react-native-picker-select";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
function Login({ navigation }) {
  const [showPassWord, setShowPassWord] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownItems = [
    { label: "Farmer specialist", value: "option1" },
    { label: "Farmer ", value: "option2" },
    { label: "Customer", value: "option3" },
  ];

  const handleToggleViewPassWord = () => {
    setShowPassWord((prevShowPassWord) => !prevShowPassWord);
  };
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
    dark,
    handleChangeDark,
    signIn,
  } = useContext(ThemeContext);

  const handleSignIn = async () => {
    try {
      if (validForm()) {
        const result = await signIn(email, password);
        navigation.navigate("MyTab");
        console.log(result, "result");
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
          paddingTop: 75,
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
          <Image source={imageOne} style={{ resizeMode: "cover" }} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 10,
            marginVertical: 20,
          }}
        >
          <Text style={{ fontWeight: 500, fontSize: 25, paddingLeft:10 }}>Login</Text>
          <Text
            style={{
              color: "#BFBBBB",
              paddingLeft: 20,
              fontSize: 15,
              marginVertical: 10
            }}
          >
            Please sign in to continue
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            // backgroundColor: "green",
            height: "35%",
          }}
        >
          <InputText
            label="email"
            theme={{ colors: { primary: "#BFBBBB" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            style={{}}
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email" />}
          />
          {emailError ? (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {emailError}
            </Text>
          ) : null}
          <InputText
            label="password"
            theme={{ colors: { primary: "#BFBBBB" } }}
            textColor="#BFBBBB"
            placeholderTextColor="#BFBBBB"
            style={{}}
            value={password}
            onChangeText={setPassword}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassWord ? "eye-off" : "eye"}
                onPress={handleToggleViewPassWord}
              />
            }
            secureTextEntry={true}
          />
          {passwordError ? (
            <Text style={{ color: "red", marginHorizontal: 60 }}>
              {passwordError}
            </Text>
          ) : null}
          <Pressable onPress={()=>navigation.navigate('ForgotPassword')}>
            <Text
              style={{
                color: "#4BA26A",
                alignSelf: "flex-end",
                fontWeight: 700,
                fontSize: 17,
                paddingVertical: 6,
              }}
            >
              Forgot Password
            </Text>
          </Pressable>

          <MyButton
            title="Log in"
            onPress={handleSignIn}
            style={{
              backgroundColor: "#4BA26A",
              height: "17%",
              marginTop: 9,
              borderRadius: 8,
              justifyContent: "center",
              // marginTop: "8%",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            // marginTop: "10%",
            // backgroundColor:'blue'
          }}
        >
          <View
            style={{
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
        <View style={{ marginVertical: 1 }}>
          <SocialMedia />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 18,
            marginTop: 50,
            gap: 20,
          }}
        >
          <Text style={{ color: "#BFBBBB" }}>Don't have an account?</Text>
          <Pressable onPress={navigation.navigate("SignUp")}>
            <Text style={{ color: "#4BA26A", fontWeight: "800" }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
