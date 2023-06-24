import { View, Text,FlatList,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState, useEffect} from 'react'
import * as Font from 'expo-font';
import {Feather} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

const Nearby = () => {

  const navigation=useNavigation();
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

  const data=[
    {
      id:1,
      name:"Majestic Manor",
      image:"https://images.pexels.com/photos/4906520/pexels-photo-4906520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:1.5,
      pricing:"9,550",
      location:"10 miles"
    },
    {
      id:2,
      name:"Chateau Lumiere",
      image:"https://images.pexels.com/photos/6161507/pexels-photo-6161507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:1.5,
      pricing:"750",
      location:"13 miles"
    },
    {
      id:3,
      name:"Ivory Palace",
      image:"https://images.pexels.com/photos/877970/pexels-photo-877970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem ipsum dolor sit amet consectetur in eius iure sit quasi aliquam",
      rating:1.5,
      pricing:"500",
      location:"Meanwood"
    },
  ]



  return (
    <View className="">

      {/*Nearby*/}
      <View>
          <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
            <Text style={{fontSize:18,color:'#172A3A',fontFamily:'poppins-regular'}}>
              Nearby
            </Text>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.navigate('AllNearby')}>
              <Text style={{textDecorationLine:'underline',color:'#508991',fontFamily:'poppins-regular'}}>
                See all
              </Text>
              <Feather name='arrow-right' style={{paddingLeft:4, color:'#508991'}}/>
            </TouchableOpacity>
          </View>
        </View> 

      {/*Nearby Cards*/}
      <FlatList
            contentContainerStyle={{paddingBottom:60}}
            showsVerticalScrollIndicator={false}
            keyExtractor={item=>item.id}
            data={data}
            horizontal={false}
            renderItem={({item})=>{
              return(
                <TouchableOpacity 
                  onPress={()=>navigation.navigate('NearbyDetails',{item})} 
                  activeOpacity={0.7}
                  style={{shadowColor: "#000", shadowOffset:{width:100, height:100}, shadowOpacity:100.58, shadowRadius:100.00, elevation:30}}
                  >
                <View style={{marginVertical:6, flexDirection:'row', backgroundColor:'#fffafa', padding:10, borderRadius:10, width:'100%'}}>

                  <SharedElement id={`item.${item.id}.near`} style={{height:100, width:'50%',borderRadius:5}}>
                    <Image 
                      source={{uri:item.image}} 
                      style={{height:100, width:'100%',borderRadius:5}} 
                      resizeMode={'cover'}
                      />
                  </SharedElement>

                  <View style={{paddingLeft:20, height:'100%', flexDirection:'column'}}>

                    {/*Name*/}
                    <View>
                      <Text style={{color:'#172A3A', fontSize:20, fontWeight:500,fontFamily:'poppins-regular'}} allowFontScaling>
                        {item.name}
                      </Text>
                    </View>

                    {/*Location*/}
                    <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                      <Feather name='map-pin' style={{color:'#508991'}}/>
                      <Text style={{color:'#508991', fontWeight:400,paddingLeft:4,fontFamily:'poppins-medium'}}>
                        {item.location}
                      </Text>
                    </View>

                    {/*Pricing*/}
                    <View style={{paddingTop:30, flexDirection:'row', width:'100%'}}>
                      <Text style={{color:'#508991', fontSize:15, fontWeight:400,fontFamily:'poppins-regular'}}>
                        K {item.pricing}/m
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