import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
  <>
   <Stack.Screen 
     options={{
       headerTransparent:true,
       headerTitle:"",
       headerLeft:()=>(
         <TouchableOpacity onPress={() => {}} style={{marginLeft:20}}>
          <Image
              source={{
                uri:"https://xsgames.co/randomusers/assets/avatars/female/70.jpg"
              }}
              style={{width:40, height:40 ,borderRadius :10}}
              />
        </TouchableOpacity>
      ),
      headerRight:()=>(
        <TouchableOpacity onPress={()=>{}} style={{marginRight:20,
          backgroundColor:Colors.white,
          padding:10,
          borderRadius:10,
          elevation: 4
        }}>
          <Ionicons name='notifications' size={20} color={Colors.black}/>
        </TouchableOpacity>
      )
    }}/>
    <View style={[styles.container,{paddingTop: headerHeight}]}>
      <Text  style={styles.headingTxt}>Explore The Beautiful World!</Text>
      <View>
        <View>
          <Ionicons name='search' size={18}/>
          <TextInput placeholder='Search Place...'/>
        </View>
        <TouchableOpacity onPress={()=>{}}>
           <Ionicons name='options' size={28}/>
        </TouchableOpacity>
      </View>
    </View>
  </> 
  )
}

export default Page

const styles = StyleSheet.create({
  container :{
    flex:1,
    paddingHorizontal:20,
    backgroundColor:Colors.bgColor
  },
  headingTxt :{
    fontSize:35,
    fontWeight: '800',
    color:Colors.black,
    marginTop:10,
  }
})