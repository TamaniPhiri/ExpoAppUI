import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Feather} from 'react-native-vector-icons'

const Signup = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff', paddingHorizontal:10}}>
      <StatusBar style="dark"/>
      {/*Heading*/}
      <View style={{width:'100%'}}>
        <Text style={{color:'#172A3A', fontSize:24, marginVertical:15}}>Sign Up</Text>
      </View>

    {/*Email input*/}
    <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row',marginBottom:25}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Feather name='mail' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
        </View>

        <View style={{width:'90%'}}>
          <TextInput placeholder='Email' 
            placeholderTextColor={'#172A3A'} 
            style={{width:'100%', paddingVertical:6,color:'#172A3A'}}
            />
        </View>
    </View>

    {/*New Password input*/}
        <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row',marginBottom:25}}>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Feather name='lock' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
          </View>

          <View style={{width:'90%'}}>
            <TextInput placeholder='New Password' 
              placeholderTextColor={'#172A3A'} 
              secureTextEntry={true} 
              style={{width:'100%', paddingVertical:6,color:'#303f81'}}
              />
          </View>
        </View>
    </View>
  )
}

export default Signup