  import React, { useState } from "react";
  import { View, Image, Dimensions, Text, ActivityIndicator } from "react-native";
  import MyButton from "../MyButton/MyButton";
  const ImageDetail = require("../../assets/soya.png");

  height = Dimensions.get("screen").height;
  width = Dimensions.get("screen").width;
  function Detail({ route }) {
    const [isLoading, setIsLoading] = useState(true);
    const item = route.params;
    console.log("rout", item);
    const handleImageLoadEnd = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    return (
      <View style={{ height: height, width: width, backgroundColor: "white" }}>
        <View
          style={{
            width: "97%",
            height: "35%",
            backgroundColor: "white",
            // marginTop: 5,
            alignSelf: "center",
            borderRadius: 12,
          }}
        >
          {isLoading && (
            <ActivityIndicator
              style={{ position: "absolute", alignSelf: "center", top: "90%" }}
              size="large"
              color="red"
            />
          )}
          <Image
            source={{ uri: item.harvest }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 12,
            }}
            onLoadEnd={handleImageLoadEnd}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", color: "black" }}>
            Soya
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: "black" }}>
            ngufashe, cost
          </Text>
        </View>
        <View style={{ marginLeft: 10, backgroundColor: "white" }}>
          <Text style={{ fontWeight: "500", fontSize: 18 }}>{item.cost}  Rwf</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "500" }}>Yanauzwa jumia na rejareja</Text>
          <Text style={{ fontWeight: "500" }}>2500 1Kg</Text>
          <Text style={{ fontWeight: "500" }}>50000 Gunia moja 25Kg</Text>
        </View>
        <View style={{ backgroundColor: "white", margin: 10 }}>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 20,
              textDecorationLine: "underline",
            }}
          >
            Muuzaji
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <View
              style={{
                backgroundColor: "white",
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            >
              <Image
                source={{ uri: item.harvest }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: 50,
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                justifyContent: "flex-end",
                gap: 1,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18 }}>Jane</Text>
              <Text style={{ fontWeight: "500" }}>iringa</Text>
            </View>
          </View>
        </View>
        <View>
          <MyButton title="SEND" style={{ height: "23%", margin: 10 }} />
        </View>
      </View>
    );
  }

  export default Detail;
