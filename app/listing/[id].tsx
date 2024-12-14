import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ListingType } from '@/types/listingType';
import listingData from "@/data/destinations.json";
import { Feather } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const {id} = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find(
    (item) => item.id == Number(id)
  );

  const router =useRouter();
  return (
    <>
    <Stack.Screen options={{
       headerTransparent:true,
       headerTitle:'',
       headerLeft:()=>(
        <TouchableOpacity onPress={()=> router.back()} style={{
          backgroundColor:"rgba(255,255,255,0.5)",
          borderRadius:10,
          padding:4
        }}>
          <View style={{
            backgroundColor:Colors.white,
            padding:6,
            borderRadius:10
          }}>
            <Feather name='arrow-left' size={20}/>
          </View>
        </TouchableOpacity>
       )
    }}/>
    <View>
      <Image source={{uri: listing.image}} style={styles.image}/>
    </View>
    </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  image:{
    width:width,
    height:IMG_HEIGHT
  }
})