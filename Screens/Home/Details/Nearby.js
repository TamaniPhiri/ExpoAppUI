import { View, Text,FlatList,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import {Feather} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

const Nearby = () => {

  const navigation=useNavigation();

  const data=[
    {
      id:1,
      name:"Chibombo",
      image:"https://images.pexels.com/photos/4906520/pexels-photo-4906520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:1.5
    },
    {
      id:2,
      name:"Lusaka",
      image:"https://images.pexels.com/photos/6161507/pexels-photo-6161507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:1.5
    },
    {
      id:3,
      name:"Chipata",
      image:"https://images.pexels.com/photos/877970/pexels-photo-877970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:1.5
    },
    {
      id:4,
      name:"Chipembi",
      image:"https://images.pexels.com/photos/14356690/pexels-photo-14356690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:4.6
    }
  ]



  return (
    <View>

      {/*Nearby*/}
      <View>
          <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
            <Text style={{fontSize:18,color:'#172A3A'}}>
              Nearby
            </Text>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.navigate('AllNearby')}>
              <Text style={{textDecorationLine:'underline',color:'#508991'}}>
                See all
              </Text>
              <Feather name='arrow-right' style={{paddingLeft:4, color:'#508991'}}/>
            </TouchableOpacity>
          </View>
        </View> 

      {/*Nearby Cards*/}
      <FlatList
            contentContainerStyle={{paddingBottom:60}}
            keyExtractor={item=>item.id}
            data={data}
            horizontal={false}
            renderItem={({item})=>{
              return(
                <TouchableOpacity onPress={()=>navigation.navigate('NearbyDetails',{item})} activeOpacity={0.7}>
                <View style={{marginVertical:10, flexDirection:'row', backgroundColor:'#fffafa', padding:10, borderRadius:10, width:'100%'}}>
                  <SharedElement id={`item.${item.id}.near`} style={{height:150, width:'50%',borderRadius:5}}>
                    <Image 
                      source={{uri:item.image}} 
                      style={{height:150, width:'100%',borderRadius:5}} 
                      resizeMode={'cover'}
                      />
                  </SharedElement>
                  <View style={{paddingLeft:12}}>
                    <View>
                      <Text style={{color:'#172A3A', fontSize:24, fontWeight:400}}>{item.name}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                      <Feather name='map-pin' style={{color:'#508991'}}/>
                      <Text style={{color:'#508991'}}>
                        10 miles
                      </Text>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              )
            }}
          />
    </View>
  )
}

export default Nearby