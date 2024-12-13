import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GroupType } from "@/types/groupTypets";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const GroupListings = ({ listings } : { listings: GroupType[] }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.itemTxt}>{item.name}</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicons name="star" size={20} color={Colors.primaryColor}/>
            <Text style={styles.textRating}>{item.rating}</Text>
            <Text style={styles.textReviews}>({item.reviews})</Text>
          </View>
        </View>
      </View>                                                                                                  
    );
  };

  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight:10
  },
  title:{
    fontSize:26,
    fontWeight:'600',
    color:Colors.black,
    marginBottom:10,
  
  },
  itemTxt:{
    fontSize:16,
    fontWeight:'600',
    color:Colors.black,
    marginBottom:8
  },
  textRating:{
    fontSize:16,
    fontWeight:'600',
    color:Colors.black,
    marginLeft:5
  },
  textReviews:{
    fontSize:16,
    color:'#999'
  }
});
