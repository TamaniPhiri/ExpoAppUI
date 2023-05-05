import { View, Text,Image,ScrollView,ImageBackground, TouchableOpacity,FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-navigation-shared-element'
import {Feather,FontAwesome5} from 'react-native-vector-icons'

const animation={
  0:{opacity:0, translateY:200},
  1:{opacity:1, translateY:0}
}

const slide={
  0:{opacity:0,translateX:-300},
  1:{opacity:1,translateX:0}
}

const left={
  0:{opacity:0,translateX:-70},
  1:{opacity:1, translateX:0}
}

const right={
  0:{opacity:0,translateX:70},
  1:{opacity:1, translateX:0}
}
const down={
  0:{opacity:0,translateY:100},
  1:{opacity:1,translateY:0}
}

const Details = ({navigation,route}) => {



  const {item}=route.params;


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
    <ScrollView 
      style={{paddingHorizontal:10,flex:1, paddingTop:60}}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      >
      <View style={{alignItems:'center', justifyContent:'center'}}>
          <SharedElement id={`item.${item.id}.image`} style={{height:300, width:'100%', borderRadius:15}}>
            <ImageBackground 
              source={{uri:item.image}} 
              style={{height:300, width:'100%', borderRadius:5}} 
              resizeMode={'cover'}
              imageStyle={{borderRadius:5}}
              />
          </SharedElement>

          {/*Go back Button*/}
          <Animatable.View
            duration={630}
            useNativeDriver
            animation={slide} 
            style={{position:'absolute', top:10, width:'100%', left:10, justifyContent:'flex-start'}}
            >
              <TouchableOpacity
                onPress={()=>navigation.goBack()} 
                style={{backgroundColor:'#fff',alignItems:'center', borderRadius:20,width:30, height:30, justifyContent:'center'}}
                >
              <Feather name='x' style={{color:'#508991',fontSize:24}}/>
              </TouchableOpacity>

          </Animatable.View>




      </View>


      {/*Socials Card*/}
      <Animatable.View
          style={{width:'65%',alignSelf:'center',flexDirection:'row',justifyContent:"space-between", backgroundColor:'#fffafa', bottom:45,paddingHorizontal:20,paddingVertical:10,borderRadius:10}}
          useNativeDriver
          animation={animation}
          >

          {/*Owner Image*/}
          <View style={{justifyContent:'center',width:'30%'}}>
            <Image source={{uri:item.ownerImg}} style={{height:62,width:62,borderRadius:100}}/>
          </View>

          {/*Owner Links*/}
          <View style={{width:'70%', justifyContent:'center',paddingLeft:10}}>

              <View>
                {/*Owner Name /Occupation */}
                <Text style={{fontFamily:'poppins-medium',fontSize:18,color:'#172A3A'}}>
                  {item.owner}
                </Text>
                <Text style={{fontFamily:'poppins-regular',fontSize:16,color:'#508991'}}>
                  {item.ownerOccupation}
                </Text>
              </View>

              {/*Owner Social Icons*/}
              <View style={{flexDirection:'row',justifyContent:'space-between', width:'65%', paddingTop:5}}>

                <TouchableOpacity>
                  <Feather name='facebook' style={{fontSize:19, color:'#508991'}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather name='twitter' style={{fontSize:19, color:'#508991'}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather name='instagram' style={{fontSize:19, color:'#508991'}}/>
                </TouchableOpacity>
              </View>
          </View>
      </Animatable.View>

      {/*House details*/}
      <View style={{width:'100%',backgroundColor:'#fffafa',bottom:25, borderTopLeftRadius:10, borderTopRightRadius:10, alignItems:'center'}}>

        {/*Interior Details*/}
        <View style={{width:'100%', justifyContent:'space-between', flexDirection:'row',paddingHorizontal:15,paddingVertical:15}}>

          {/*Bedrooms*/}
          <Animatable.View
            style={{backgroundColor:'#d3d3d3',borderRadius:8,alignItems:'center'}}
            useNativeDriver
            animation={left}
            duration={800}
            >
            <FontAwesome5 name='bed'style={{paddingTop:20,fontSize:34,paddingBottom:10,paddingHorizontal:18,color:'#172A3A'}}/>
            <Text style={{paddingBottom:5,fontFamily:'poppins-regular',color:'#172A3A'}}>5 Rooms</Text>
          </Animatable.View>

          {/*Bathrooms*/}
          <Animatable.View
            style={{backgroundColor:'#d3d3d3',borderRadius:8,alignItems:'center'}}
            useNativeDriver
            animation={down}
            duration={900}
            >
            <FontAwesome5 name='bath' style={{paddingTop:20,fontSize:34,paddingBottom:10,paddingHorizontal:25,color:'#172A3A'}}/>
            <Text style={{paddingBottom:5,fontFamily:'poppins-regular',color:'#172A3A'}}>3 Rooms</Text>
          </Animatable.View>

          {/*Kitchen*/}
          <Animatable.View
            style={{backgroundColor:'#d3d3d3',borderRadius:8,alignItems:"center"}}
            useNativeDriver
            animation={right}
            duration={800}
            >
            <FontAwesome5 name='wine-glass-alt' style={{paddingTop:20,fontSize:34,paddingHorizontal:25,paddingBottom:10,paddingHorizontal:28,color:'#172A3A'}}/>
            <Text style={{paddingBottom:5,fontFamily:'poppins-regular',color:'#172A3A'}}>2 Rooms</Text>
          </Animatable.View>
        </View>


        {/*Description*/}
        <View>
            <View>
              <Text style={{fontSize:22, fontFamily:'poppins-medium',color:'#172A3A'}}>Description</Text>
              <Text style={{fontFamily:'poppins-regular',color:'#808080'}}>{item.description}</Text>
            </View>
        </View>

        {/*Gallery*/}
        <View style={{width:'100%'}}>
          <View style={{paddingVertical:10}}>
            <Text style={{fontFamily:'poppins-medium',fontSize:22}}>
              Gallery
            </Text>
          </View>

          {/*Images*/}
          <View>
            <FlatList
              horizontal/>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}

Details.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [
    {
      id:`item.${item.id}.image`,
    }
  ];;
}

export default Details
