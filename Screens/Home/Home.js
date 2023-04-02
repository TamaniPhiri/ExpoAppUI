import { View, Text, FlatList,Image,TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'
import {Feather} from 'react-native-vector-icons'

const Home = ({navigation}) => {

  const animation={
    0:{opacity:0, translateX:200},
    1:{opacity:1, translateX:0}
  }


  const DATA=[
    {
      id:1,
      name:"Italiano",
      image:"https://images.pexels.com/photos/1002745/pexels-photo-1002745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
    {
      id:2,
      name:"Vinland",
      image:"https://images.pexels.com/photos/221106/pexels-photo-221106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
    {
      id:3,
      name:"Denmark",
      image:"https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
    {
      id:4,
      name:"Brighton",
      image:"https://images.pexels.com/photos/5490166/pexels-photo-5490166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
  ]

  return (
    <ScrollView style={{paddingHorizontal:10, flex:1, marginTop:50}} 
      showsVerticalScrollIndicator={false} 
      horizontal={false}
      >

      {/*Header*/}
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:26, fontWeight:500}}>
          Discover
        </Text>

        {/*Notifications Button*/}
        <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
          <Feather name='bell' style={{fontSize:20}}/>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{alignItems:'center', justifyContent:'center', paddingVertical:30}}
          horizontal
          data={DATA}
          keyExtractor={item=>item.id}
          decelerationRate={'fast'}
          renderItem={({item})=>{
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('Details',{item})} activeOpacity={0.7}>
                <View style={{alignItems:'center', justifyContent:'center',width:'100%',paddingHorizontal:20}}>
                    <SharedElement id={`item.${item.id}.image`} style={{height:200,width:'100%'}}>
                    <ImageBackground 
                      source={{uri:item.image}} 
                      style={{height:200, width:200}} 
                      resizeMode={'cover'}
                      imageStyle={{borderRadius:5}}
                      />
                    </SharedElement>

                    <Animatable.View 
                      useNativeDriver
                      animation={animation} 
                      style={{overflow:'hidden',width:200,display:'flex', position:'absolute', top:0, padding:6}}
                      numberOfLines={3}
                      >
                      <Animatable.Text
                        useNativeDriver
                        animation={animation}
                        style={{color:'#fff',fontWeight:500, fontSize:20}}
                        >
                        {item.name}
                      </Animatable.Text>
                    </Animatable.View>
                    
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Home