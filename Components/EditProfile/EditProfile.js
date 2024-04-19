import React, { useEffect, useState } from "react";
import { Dimensions, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import MyButton from "../MyButton/MyButton";
const ImageOne = require("../../assets/splash.png");
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import InputText from "../InputText/InputText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../Firebase/FirebaseOne";
import { getItemAsync } from "expo-secure-store";

function EditProfile({ route }) {
  const rout = route.params;
  console.log("here is", rout);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleFetchProfile = async () => {
    try {
      const profileResult = await getDoc(doc(FIREBASE_DB, "users", rout));
      const EditProfileResult = profileResult.data();
      console.log(EditProfileResult);
      setFullName(EditProfileResult.registerFullName);
      setEmail(EditProfileResult.registerEmail);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchProfile();
    getItemAsync("userData");
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const userUpdate = await updateDoc(doc(FIREBASE_DB, "users", rout), {
        registerFullName: fullName,
        registerEmail: email,
      });
      console.log("userUpdate",userUpdate)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          height: height,
          width: width,
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <View style={{ backgroundColor: "green", height: 270, zIndex: 1 }}>
          <View
            style={{
              height: 125,
              width: 125,
              backgroundColor: "white",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 250,
              marginTop: 190,
              borderWidth: 4,
              borderColor: "white",
              position: "relative",
            }}
          >
            <Image
              source={ImageOne}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderRadius: 250,
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: height,
            width: width,
            backgroundColor: "white",
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 0,
            paddingTop: 60,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 6,
            }}
          >
            <Text>Change Picture</Text>
          </View>
          <View style={{ padding: 18, backgroundColor: "white" }}>
            <Text style={{ fontWeight: 500 }}>FullName</Text>
            <InputText
              theme={{ colors: { primary: "transparent" } }}
              value={fullName}
              onChangeText={setFullName}
              textColor="#BFBBBB"
              placeholderTextColor="#BFBBBB"
              transparentColor="transparent"
              underlineColor="transparent"
              style={{
                height: "12%",
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginVertical: 10,
              }}
            />
            <Text style={{ fontWeight: 500 }}>Email I'd</Text>
            <InputText
              theme={{ colors: { primary: "transparent" } }}
              value={email}
              onChangeText={setEmail}
              textColor="#BFBBBB"
              placeholderTextColor="#BFBBBB"
              underlineColor="transparent"
              style={{
                height: "12%",
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginVertical: 10,
              }}
            />
            <View style={{ marginTop: 30 }}>
              <MyButton
                title="Update"
                onPress={() => {
                  handleUpdateProfile();
                }}
                style={{
                  height: 52,
                  width: "99%",
                  alignSelf: "center",
                  paddingVertical: 8,
                  backgroundColor: "black",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EditProfile;
