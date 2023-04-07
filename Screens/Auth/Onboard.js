import Onboarding from 'react-native-onboarding-swiper'
import React,{useState,useEffect} from 'react'
import { Image,Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable'

const Onboard = ({navigation}) => {

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

  const animation={
    0:{opacity:0,translateY:500},
    1:{opacity:1,translateY:0}
  }


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
          title:<Animatable.Text 
                  style={{color:'#172A3A', fontSize:26, paddingBottom:10, fontFamily:'poppins-regular'}}
                  useNativeDriver
                  animation={animation}
                  duration={1400}
                  >
                    Need a Villa?
                </Animatable.Text>,
          subtitle: <Animatable.Text 
                      style={{fontSize:16, color:'#004346', fontFamily:'poppins-regular'}}
                      animation={animation}
                      duration={800}
                      >
                        We have it all here my gee
                    </Animatable.Text>,
        },
        {
          backgroundColor: '#c3d1da',
          image: <Image source={{uri:'https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} resizeMode={'cover'} style={{width:'95%', height:500, borderRadius:20}}/>,
          title: <Text style={{color:'#172A3A', fontSize:26, paddingBottom:10, fontFamily:'poppins-regular'}}>A Shackle?</Text>,
          subtitle: <Text style={{fontSize:16, color:'#004346', fontFamily:'poppins-regular'}}>Well, you are in the right place</Text>,
        },
        {
          backgroundColor: '#93b6ba',
          image: <Image source={{uri:'https://images.pexels.com/photos/2194399/pexels-photo-2194399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} resizeMode={'cover'} style={{width:'95%', height:500, borderRadius:20}}/>,
          title: <Text style={{color:'#172A3A', fontSize:26, paddingBottom:10, fontFamily:'poppins-regular'}}>Welcome Indeed</Text>,
          subtitle: <Text style={{fontSize:16, color:'#004346', fontFamily:'poppins-regular'}}>Beautiful, isn't it?</Text>,
        },
      ]}
  />
  </>
  )
}

export default Onboard