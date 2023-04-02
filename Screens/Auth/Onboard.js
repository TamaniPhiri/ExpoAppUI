import Onboarding from 'react-native-onboarding-swiper'
import React from 'react'
import { Image,Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Onboard = ({navigation}) => {
  return (
    <>
    <StatusBar style="light"/>
    <Onboarding
      onSkip={()=>navigation.navigate('Login')}
      onDone={()=>navigation.navigate('Signup')}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={{uri:'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} resizeMode={'cover'} style={{width:'95%', height:500, borderRadius:20}}/>,
          title:<Text style={{color:'#172A3A', fontSize:26, paddingBottom:10}}>Need a Villa?</Text>,
          subtitle: <Text style={{fontSize:16, color:'#004346'}}>We have it all here my gee</Text>,
        },
        {
          backgroundColor: '#c3d1da',
          image: <Image source={{uri:'https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} resizeMode={'cover'} style={{width:'95%', height:500, borderRadius:20}}/>,
          title: <Text style={{color:'#172A3A', fontSize:26, paddingBottom:10}}>A Shackle?</Text>,
          subtitle: <Text style={{fontSize:16, color:'#004346'}}>Well, you are in the right place</Text>,
        },
        {
          backgroundColor: '#93b6ba',
          image: <Image source={{uri:'https://images.pexels.com/photos/2194399/pexels-photo-2194399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} resizeMode={'cover'} style={{width:'95%', height:500, borderRadius:20}}/>,
          title: <Text style={{color:'#172A3A', fontSize:26, paddingBottom:10}}>Welcome Indeed</Text>,
          subtitle: <Text style={{fontSize:16, color:'#004346'}}>Beautiful, isn't it?</Text>,
        },
      ]}
  />
  </>
  )
}

export default Onboard