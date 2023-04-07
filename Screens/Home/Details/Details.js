import { View, Text,Image,ScrollView,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-navigation-shared-element'
import {Feather} from 'react-native-vector-icons'

const animation={
  0:{opacity:0, translateY:200},
  1:{opacity:1, translateY:0}
}

const slide={
  0:{opacity:0,translateX:-300},
  1:{opacity:1,translateX:0}
}

const Details = ({navigation,route}) => {

  const {item}=route.params;

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
          style={{width:'60%',alignSelf:'center',flexDirection:'row',justifyContent:"space-between", backgroundColor:'#d3d3d3', bottom:40,paddingHorizontal:20,paddingVertical:10,borderRadius:10}}
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
                <Text>
                  {item.owner}
                </Text>
                <Text>
                  {item.ownerOccupation}
                </Text>
              </View>

              {/*Owner Social Icons*/}
              <View style={{flexDirection:'row'}}>
                <Feather name='facebook'/>
                <Feather name='twitter'/>
                <Feather name='instagram'/>
              </View>
          </View>
      </Animatable.View>
    </ScrollView>
  )
}

Details.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [
    {
      id:`item.${item.id}.image`,
    },
  ];;
}

export default Details
