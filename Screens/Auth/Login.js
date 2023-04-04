import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {Feather} from 'react-native-vector-icons'

const Login = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal:10}}>
      {/*Heading*/}
      <View style={{width:'100%'}}>
        <Text style={{color:'#508991', fontSize:24, marginVertical:15}}>Login</Text>
      </View>

      {/*Email input*/}
      <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row',marginBottom:25}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Feather name='mail' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
        </View>

        <View style={{width:'90%'}}>
          <TextInput placeholder='Email' 
            placeholderTextColor={'#358b81'}  
            style={{width:'100%', paddingVertical:6,color:'#303f81'}}
            />
        </View>
      </View>

      {/*Password input*/}
      <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row'}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Feather name='lock' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
        </View>

        <View style={{width:'90%'}}>
          <TextInput placeholder='Password' 
            placeholderTextColor={'#358b81'} 
            secureTextEntry={true} 
            style={{width:'100%', paddingVertical:6,color:'#303f81'}}
            />
        </View>
      </View>
    </View>
  )
}

export default Login