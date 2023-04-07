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
    <View style={{paddingHorizontal:10,flex:1, paddingTop:60}}>
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

          <View style={{overflow:'hidden', width:'100%',height:100, paddingTop:20}}>
            <Animatable.Text
              useNativeDriver
              animation={animation} 
              adjustsFontSizeToFit
              numberOfLines={2}
              duration={900}
              >
              {item.description}
            </Animatable.Text>
            <Animatable.Text 
              animation={slide} 
              duration={1200}
              useNativeDriver
              >
              {item.name}
            </Animatable.Text>
          </View>

      </View>
    </View>
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
