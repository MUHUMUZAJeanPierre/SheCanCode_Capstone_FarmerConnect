import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import AddHarvest from "../AddHarvest/AddHarvest";
import Detail from "../Detail/Detail";
import Icon from "react-native-vector-icons/Ionicons";
import Profile from "../Profile/Profile";
import SubDetail from "../SubDetail/SubDetail";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Cart from "../Cart/Cart";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          tabBarStyle: {
            // marginTop:20
            // backgroundColor: "black",
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SubDetail}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <FontAwesome5 name="shopping-bag" size={24} color={color} />
            <AntDesign name="search1" size={24} color={color} />
          ),
          tabBarStyle: {
            // marginTop:20
            // backgroundColor: "black",
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddHarvest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-circle-outline" color={color} size={size} />
          ),
          tabBarStyle: {
            // marginTop:20
            // backgroundColor: "black",
          },
        }}
      />
      {/* <Tab.Screen name="SubDetail" component={SubDetail} /> */}
        <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarVisible:false,
            tabBarIcon: ({ color, size }) => (
              
              <Icon name="information-circle-outline" color={color} size={size} />
            ),
            tabBarStyle: {
              // paddingTop:20
              // backgroundColor: "black",
            },
          }}
        />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          tabBarStyle: {
            // paddingTop:20
            // backgroundColor: "black",
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={24} color="#48742c" />
          ),
          tabBarStyle: {
            // paddingTop:20
            // backgroundColor: "black",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTab;
