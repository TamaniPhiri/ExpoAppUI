import { View, Text, FlatList,Image,TouchableOpacity, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'


const Home = ({navigation}) => {

  const animation={
    0:{opacity:0, translateX:200},
    1:{opacity:1, translateX:0}
  }


  const DATA=[
    {
      id:1,
      name:"Lorem",
      image:"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
    {
      id:2,
      name:"Ipsum",
      image:"https://images.pexels.com/photos/2100245/pexels-photo-2100245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
    {
      id:3,
      name:"Lorem",
      image:"https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
    {
      id:4,
      name:"Ipsum",
      image:"https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam."
    },
  ]

  return (
    <ScrollView style={{paddingHorizontal:10, flex:1, marginTop:50}} showsVerticalScrollIndicator={false} horizontal={false}>
      <View>
        <Text style={{fontSize:26, fontWeight:500}}>Discover</Text>
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
                    <Image source={{uri:item.image}} style={{height:200, width:200, borderRadius:15}} resizeMode={'cover'}/>
                    </SharedElement>

                    <Animatable.View 
                      useNativeDriver
                      animation={animation} 
                      style={{overflow:'hidden',width:200,display:'flex', paddingTop:20}}
                      numberOfLines={3}
                      >
                      <Text 
                        style={{position:'relative'}}
                        numberOfLines={2}
                        >
                        {item.description}
                      </Text>
                      <Animatable.Text
                        useNativeDriver
                        animation={animation}
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