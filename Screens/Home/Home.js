import { View, Text, FlatList,Image,TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import React,{useState, useEffect} from 'react'
import * as Font from 'expo-font';
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'
import {Feather, Ionicons} from 'react-native-vector-icons'
import Nearby from './Details/Nearby'

const Home = ({navigation}) => {

  const animation={
    0:{opacity:0, translateX:200},
    1:{opacity:1, translateX:0}
  }
  const up={
    0:{opacity:0,translateY:30},
    1:{opacity:1,translateY:0}
  }
  const slide={
    0:{opacity:0,translateX:-300},
    1:{opacity:1,translateX:0}
  }

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


  const DATA=[
    {
      id:1,
      name:"Palace Paradiso",
      image:"https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique. Corrupti quidem amet iure doloremque pariatur ipsum est cum tempore, id veniam maxime distinctio sed quas laborum suscipit facilis excepturi?",
      rating:3.1,
      pricing:"950",
      owner:"Dave Methan",
      ownerImg:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ownerOccupation:"Developer"
    },
    {
      id:2,
      name:"Castle Aurora",
      image:"https://images.pexels.com/photos/221106/pexels-photo-221106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique. Corrupti quidem amet iure doloremque pariatur ipsum est cum tempore, id veniam maxime distinctio sed quas laborum suscipit facilis excepturi?",
      rating:3.9,
      pricing:"1,500",
      owner:"Rogan Muller",
      ownerImg:"https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ownerOccupation:"Supervisor"
    },
    {
      id:3,
      name:"Villa Aurelia",
      image:"https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique. Corrupti quidem amet iure doloremque pariatur ipsum est cum tempore, id veniam maxime distinctio sed quas laborum suscipit facilis excepturi?",
      rating:4.2,
      pricing:"750",
      owner:"Tamani Velli",
      ownerImg:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ownerOccupation:"Senior Developer"
    },
    {
      id:4,
      name:"Brighton",
      image:"https://images.pexels.com/photos/5490166/pexels-photo-5490166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique. Corrupti quidem amet iure doloremque pariatur ipsum est cum tempore, id veniam maxime distinctio sed quas laborum suscipit facilis excepturi?",
      rating:5.0,
      pricing:"2,950",
      owner:"Bob Ridrick",
      ownerImg:"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ownerOccupation:"Gardener"
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
        <Text style={{fontSize:26, fontWeight:500,color:'#172A3A',fontFamily:'poppins-medium'}}>
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
        <Text style={{fontSize:18,color:'#172A3A',fontFamily:'poppins-regular'}}>
          Popular
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Popular')}
          style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}
          >
          <Text style={{textDecorationLine:'underline',color:'#508991',fontFamily:'poppins-regular'}}>
            See all
          </Text>
          <Feather name='arrow-right' style={{paddingLeft:4, color:'#508991'}}/>
        </TouchableOpacity>
      </View>

      {/*Places List*/}
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{alignItems:'center', justifyContent:'center', paddingTop:30}}
          horizontal
          data={DATA}
          keyExtractor={item=>item.id}
          decelerationRate={'fast'}
          renderItem={({item,index})=>{
            return(
              <TouchableOpacity 
                onPress={()=>navigation.navigate('Details',{item})} 
                activeOpacity={0.7}
                >
                <Animatable.View 
                    style={{alignItems:'center', justifyContent:'center',width:'100%',paddingHorizontal:20,shadowColor: "#000", shadowOffset:{width:10, height:100}, shadowOpacity:100, shadowRadius:10.00, elevation:20}}
                    useNativeDriver
                    animation={slide}
                    duration={1500*index}
                    >
                    <SharedElement id={`item.${item.id}.image`} style={{height:200,width:'100%'}}>
                    <ImageBackground 
                      source={{uri:item.image}} 
                      style={{height:150, width:200}} 
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
                        style={{color:'#fff',fontWeight:500, fontSize:18,fontFamily:'poppins-medium'}}
                        >
                        {item.name}
                      </Animatable.Text>
                    </Animatable.View>
                    <Animatable.View 
                      style={{position:'absolute', bottom:50, width:'100%', padding:6, flexDirection:'row', alignItems:'center',justifyContent:'space-between',backgroundColor:'#fffafa', borderBottomLeftRadius:5, borderBottomRightRadius:5}}
                      useNativeDriver
                      animation={up}
                      >
                      <View>
                        <Text style={{color:'#172A3A', fontWeight:200, fontFamily:'poppins-regular'}}>
                          K {item.pricing}/m
                        </Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Ionicons name='star' style={{color:'#ffd700', fontSize:14}}/>
                        <Text style={{color:'#172A3A', paddingLeft:4,fontWeight:600, fontSize:14, fontFamily:'poppins-medium'}}> 
                          {item.rating}
                        </Text>
                      </View>
                    </Animatable.View>
                    
                </Animatable.View>
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