import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {Feather} from 'react-native-vector-icons'

const Login = ({navigation}) => {
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
              placeholderTextColor={'#303f81'} 
              style={{width:'100%', paddingVertical:6,color:'#172A3A'}}
              />
          </View>
      </View>

      {/*New Password input*/}
      <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row',marginBottom:15}}>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Feather name='lock' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
          </View>

          <View style={{width:'90%'}}>
            <TextInput placeholder='Password' 
              placeholderTextColor={'#303f81'} 
              secureTextEntry={true} 
              style={{width:'100%', paddingVertical:6,color:'#303f81'}}
              />
          </View>
        </View>

      {/*Login button*/}
      <TouchableOpacity 
        style={{backgroundColor:'#508991',marginVertical:10, width:'100%', alignItems:'center',borderRadius:6, justifyContent:'center',shadowColor: "#000", shadowOffset:{width:0, height:50}, shadowOpacity:400.58, shadowRadius:100.00, elevation:10}}
        onPress={()=>navigation.navigate('Welcome')}
        >
        <Text style={{color:'#fff', paddingVertical:12}}>
          Log in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{width:'100%',alignItems:'center', justifyContent:'center', flexDirection:'row', top:100}}>
        <Text style={{color:'#508991', paddingHorizontal:8}}>
          Don't have an account?
        </Text>
        <Text style={{textDecorationLine:'underline', color:'#508991'}}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login