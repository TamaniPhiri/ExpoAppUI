import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-navigation-shared-element'

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
          <Image source={{uri:item.image}} style={{height:300, width:'100%', borderRadius:5}} resizeMode={'cover'}/>
          </SharedElement>

          <View style={{overflow:'hidden', width:'90%',height:100, paddingTop:20}}>
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
