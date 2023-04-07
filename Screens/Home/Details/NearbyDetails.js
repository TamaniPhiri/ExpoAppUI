import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element'

const NearbyDetails = ({route}) => {

    const navigation=useNavigation();
    const {item}=route.params;
  return (
    <View>
      <Text>{item.name}</Text>
      <SharedElement style={{height:150,width:'100%'}} id={`item.${item.id}.near`}>
        <Image source={{uri:item.image}} style={{height:150,width:'100%'}} resizeMode={'cover'}/>
      </SharedElement>
    </View>
  )
}

NearbyDetails.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [
      {
        id:`item.${item.id}.near`,
      },
    ];;
  }

export default NearbyDetails