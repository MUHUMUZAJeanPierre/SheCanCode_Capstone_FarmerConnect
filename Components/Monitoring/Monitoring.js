import React from 'react';
import { View, Image, Dimensions, Text, Pressable } from 'react-native';
const Monitor = require('../../assets/Monitor.png')

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Monitoring = ()=> {
  return (
    <>
        <View style={{height:height, width:width, backgroundColor:'white', alignItems:'center', paddingTop:100}}>
            <View>
                <Image source={Monitor} resizeMethod='cover' />
            </View>
            <View style={{marginVertical:15}}>
                <Text style={{fontSize:20, fontWeight:'500', color:'black'}}>Monitoring Soil and </Text>
                <Text style={{fontSize:20, fontWeight:'500', color:'black', textAlign:'center'}}>plant</Text>
            </View>
            <View style={{}}>
                <Text style={{fontSize:16, color:'#E0E0E0'}}>we aim to use optical (VIR) sensing to </Text>
                <Text style={{fontSize:16, color:'#E0E0E0'}}>observe the field and make timely crop</Text>
                <Text style={{fontSize:16, color:'#E0E0E0'}}>management decisions.</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:'50%', gap:10}}>
                <Pressable style={{width:'45%', height:40, backgroundColor:'#F3F3F3', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#A1A1A1'}}>Back</Text>
                </Pressable>
                <Pressable style={{width:'45%', height:40, backgroundColor:'#4BA26A', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white'}}>Next</Text>
                </Pressable>
            </View>
        </View>
    </>
  )
}

export default Monitoring