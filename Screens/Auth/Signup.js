import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import {Feather} from 'react-native-vector-icons'

const Signup = ({navigation}) => {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  {/*Font Loading*/}
  async function loadFonts() {
    await Font.loadAsync({
      'poppins-regular': require('/Users/T-Mani/element/assets/Fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('/Users/T-Mani/element/assets/Fonts/Poppins-Bold.ttf'),
      'poppins-light':require('/Users/T-Mani/element/assets/Fonts/Poppins-Light.ttf'),
      'poppins-medium':require('/Users/T-Mani/element/assets/Fonts/Poppins-Medium.ttf'),
    });
    return true;
  }
  

useEffect(() => {
    async function loadAsync() {
      await loadFonts();
      setFontsLoaded(true);
    }
    loadAsync();
  }, []);


  if (!fontsLoaded) {
    return null;
  }
  {/*Fonts Loaded*/}

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff', paddingHorizontal:10}}>
      <StatusBar style="dark"/>
      {/*Heading*/}
      <View style={{width:'100%'}}>
        <Text style={{color:'#508991', fontSize:24, marginVertical:15, fontFamily:'poppins-medium'}}>Sign Up</Text>
      </View>

      {/*Email input*/}
      <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row',marginBottom:25}}>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Feather name='mail' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
          </View>

          <View style={{width:'90%'}}>
            <TextInput placeholder='Email' 
              placeholderTextColor={'#303f81'} 
              style={{width:'100%', paddingVertical:6,color:'#172A3A', fontFamily:'poppins-regular'}}
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
              placeholderTextColor={'#303f81'} 
              secureTextEntry={true} 
              style={{width:'100%', paddingVertical:6,color:'#303f81', fontFamily:'poppins-regular'}}
              />
          </View>
        </View>

      {/*Password input confirms*/}
      <View style={{width:'100%', alignItems:'center',justifyContent:'center', backgroundColor:'#d3d3d3',borderRadius:6,flexDirection:'row'}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Feather name='lock' style={{paddingHorizontal:6, fontSize:16, color:'#303f81'}}/>
        </View>

        <View style={{width:'90%'}}>
          <TextInput placeholder='Confirm Password' 
            placeholderTextColor={'#303f81'} 
            secureTextEntry={true} 
            style={{width:'100%', paddingVertical:6,color:'#303f81', fontFamily:'poppins-regular'}}
            />
        </View>
      </View>

      {/*Signup Button*/}
      <TouchableOpacity style={{backgroundColor:'#508991',marginVertical:25, width:'100%', alignItems:'center',borderRadius:6, justifyContent:'center',shadowColor: "#000", shadowOffset:{width:0, height:50}, shadowOpacity:400.58, shadowRadius:100.00, elevation:10}}>
        <Text style={{color:'#fff', paddingVertical:12, fontFamily:'poppins-regular'}}>
          Sign up
        </Text>
      </TouchableOpacity>

      {/*Already have an account? */}
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{width:'100%',alignItems:'center', justifyContent:'center', flexDirection:'row', top:100}}>
        <Text style={{color:'#508991', paddingHorizontal:8, fontFamily:'poppins-regular'}}>
          Already have an account?
        </Text>
        <Text style={{textDecorationLine:'underline', color:'#508991', fontFamily:'poppins-regular'}}>
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup