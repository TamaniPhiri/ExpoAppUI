import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Home/Profile'
import Settings from '../Screens/Home/Settings'
import Details from '../Screens/Home/Details/Details';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {Feather} from 'react-native-vector-icons';
import * as Animatable from 'react-native-animatable'
import { View } from 'react-native';

const Tab=createBottomTabNavigator();
const Stack=createSharedElementStackNavigator();

const animation={
  0:{opacity:0, translateX:300},
  1:{opacity:1,translateX:0}
}

const DetailStack=({navigation})=>{
  return(
    <Stack.Navigator initialRouteName='HomeStack' screenOptions={{headerShown:false}}>
      <Stack.Screen name='HomeStack' component={Home}/>
      <Stack.Screen name='Details' component={Details}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [{id:`item.${item.id}.image`},{id:`item.${item.id}.meta`}];
        }}
      />
    </Stack.Navigator>
  )
}

const HomeStack = () => {


  return (
        <Tab.Navigator 
          initialRouteName='Home' 
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{backgroundColor:'#172A3A', height:55,marginHorizontal:15, position:'absolute', borderRadius:8, marginVertical:15,shadowColor: "#000", shadowOffset:{width:0, height:50}, shadowOpacity:400.58, shadowRadius:100.00, elevation:10,borderTopWidth: 0},
            tabBarHideOnKeyboard:true,
          }}
          >
            <Tab.Screen 
              name='Home' 
              component={DetailStack}
              options={{
                tabBarIcon:({focused})=>(
                  focused
                  ?<View style={{borderBottomColor:'#508991', borderRadius:4, borderBottomWidth:2, paddingHorizontal:10, paddingVertical:4}}><Feather name='home' style={{fontSize:28,color:'#fff'}}/></View>
                  :<Feather name='home' style={{fontSize:24,color:'#508991'}}/>
                )
              }}
              />
            <Tab.Screen 
              name='Profile' 
              component={Profile}
              options={{
                tabBarIcon:({focused})=>(
                  focused
                  ?<View style={{borderBottomColor:'#508991', borderRadius:4, borderBottomWidth:2, paddingHorizontal:10, paddingVertical:4}}><Feather name='user' style={{fontSize:28,color:'#fff'}}/></View>
                  :<Feather name='user' style={{fontSize:24,color:'#508991'}}/>
                )
              }}
              />
            <Tab.Screen 
              name='Settings' 
              component={Settings}
              options={{
                tabBarIcon:({focused})=>(
                  focused
                  ?<View style={{borderBottomColor:'#508991', borderBottomWidth:2, borderRadius:4,paddingHorizontal:10, paddingVertical:4}}><Feather name='settings' style={{fontSize:26,color:'#fff'}}/></View>
                  :<Feather name='settings' style={{fontSize:24,color:'#508991'}}/>
                )
              }}
              />
        </Tab.Navigator>
  )
}

export default HomeStack