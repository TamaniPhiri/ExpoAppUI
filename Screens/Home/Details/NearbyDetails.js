import { View, Text,Image,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'
import {Feather} from 'react-native-vector-icons'

const NearbyDetails = ({route}) => {

    const navigation=useNavigation();
    const {item}=route.params;

    const slide={
        0:{opacity:0,translateX:-300},
        1:{opacity:1,translateX:0}
      }
      

  return (
    <View style={{paddingHorizontal:10,flex:1, paddingTop:60}}>

        <View style={{alignItems:'center', justifyContent:'center'}}>
      <SharedElement style={{height:300,width:'100%'}} id={`item.${item.id}.near`}>
        <ImageBackground source={{uri:item.image}} 
            style={{height:300,width:'100%'}} 
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
        <View style={{width:'100%'}}>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
        </View>
      
      </View>
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