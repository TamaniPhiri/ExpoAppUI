import { View, Text, FlatList,Image,TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'
import {Feather, Ionicons} from 'react-native-vector-icons'
import Nearby from './Details/Nearby'

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
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam.",
      rating:3.1,
      pricing:"K950/m"
    },
    {
      id:2,
      name:"Vinland",
      image:"https://images.pexels.com/photos/221106/pexels-photo-221106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam.",
      rating:3.9,
      pricing:"K1,500/m"
    },
    {
      id:3,
      name:"Denmark",
      image:"https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam.",
      rating:4.2,
      pricing:"K750/m"
    },
    {
      id:4,
      name:"Brighton",
      image:"https://images.pexels.com/photos/5490166/pexels-photo-5490166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam.",
      rating:5.0,
      pricing:"K2,950/m"
    },
  ]


  return (
    <View style={{paddingHorizontal:10, flex:1, marginTop:50,width:'100%'}} 
      showsVerticalScrollIndicator={false} 
      horizontal={false}
      nestedScrollEnabled={true}
      >

      {/*Header*/}
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingVertical:10}}>
        <Text style={{fontSize:26, fontWeight:500,color:'#172A3A'}}>
          Discover
        </Text>

        {/*Notifications Button*/}
        <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
          <Feather name='bell' style={{fontSize:20,color:'#508991'}}/>
        </TouchableOpacity>
      </View>

      {/*Popular now*/}
      <ScrollView>
      <View style={{flexDirection:'row', width:'100%', alignItems:'center', paddingTop:30,justifyContent:'space-between'}}>
        <Text style={{fontSize:18,color:'#172A3A'}}>
          Popular
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Popular')}
          style={{flexDirection:'row', alignItems:'center'}}
          >
          <Text style={{textDecorationLine:'underline',color:'#508991'}}>
            See all
          </Text>
          <Feather name='arrow-right' style={{paddingLeft:4, color:'#508991'}}/>
        </TouchableOpacity>
      </View>

      {/*Places List*/}
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
                      style={{overflow:'hidden',width:200,display:'flex', position:'absolute', top:0, padding:6, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}
                      numberOfLines={3}
                      >
                      <Animatable.Text
                        useNativeDriver
                        animation={animation}
                        style={{color:'#fff',fontWeight:500, fontSize:20}}
                        >
                        {item.name}
                      </Animatable.Text>
                      <Text style={{color:'#fff', paddingLeft:20, fontWeight:200}}>
                        {item.pricing}
                      </Text>
                    </Animatable.View>
                    <View style={{position:'absolute', bottom:0, width:'100%', padding:6, flexDirection:'row', alignItems:'center'}}>
                      <Ionicons name='star' style={{color:'#ffd700', fontSize:14}}/>
                      <Text style={{color:'#fff', paddingLeft:4,fontWeight:600, fontSize:14}}> 
                        {item.rating}
                      </Text>
                    </View>
                    
                </View>
              </TouchableOpacity>
            )
          }}
        />
          <>
            <Nearby/>
          </>
      </View>
      </ScrollView>
    </View>
  )
}

export default Home