// SelectedItemsComponent.js
import React, { useContext } from "react";
import { View, Text, FlatList, ScrollView,Pressable,Image } from "react-native";
import { ThemeContext } from "../Context/ThemeContext";
import InputText from "../InputText/InputText";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const SelectedItems = () => {
  // Access selectedItems array from the context
  const { selectedItems } = useContext(ThemeContext);
  // const [totalCost, setTotalCost ] = 

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop:50}}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <InputText
          label=""
          underlineColor="transparent"
          placeholder="Search in here"
          onChangeText={(text) => setSearch(text)}
          style={{
            width: "80%",
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            // textColor: "white",
            backgroundColor: "whitesmoke",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 10,
          }}
          right={<TextInput.Icon icon="magnify" />}
          theme={{ colors: { primary: "red" } }}
        />
        <View
          style={{
            // backgroundColor: "#48742c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 500,
            width: 55,
            height: 55,
            marginTop: 2,
            shadowOffset: { width: 0, height: 4 },
            // shadowOpacity: 0.2,
            // shadowRadius: 4,
            // elevation: 10,
          }}
        >
          <AntDesign name="shoppingcart" size={34} color="#48742c" />
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            // height: height,
            width: width,
            paddingTop: 10,
            backgroundColor: "white",
          }}
        >
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={selectedItems}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  backgroundColor: "white",
                  margin: 14,
                  height: 140,
                  width:'90%',
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRadius: 10,
                  shadowColor: "black",
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.55,
                  shadowRadius: 3.84,
                  elevation: 3,
                }}
                onPress={() => navigation.navigate("Detail", item)}
              >
                <View
                  style={{
                    width: "45%",
                    height: 120,
                    alignItems: "center ",
                    borderWidth: 2,
                    borderColor: "green",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.harvest }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 8,
                    }}
                  />
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 18 }}>{item.title}</Text>
                  <Text style={{ color: "#808080" }}>{item.description}</Text>
                  <Text>{item.cost} Rwf</Text>
                </View>
                <View style={{flexDirection:'column', gap:20}}>
                  <Pressable>
                   <AntDesign name="pluscircleo" size={24} color="#48742c" />
                  </Pressable>
                  <Pressable>
                    <AntDesign name="minuscircleo" size={24} color="#48742c" />
                  </Pressable>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectedItems;
