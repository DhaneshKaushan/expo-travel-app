import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    onCategoryChanged : (category: string)=>void;
}

const CategoryButtons = ({ onCategoryChanged}:Props) => {
  const scrollRef =  useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[] >([]);
  const [activeindex, setActiveIndex ] = useState(0);

  const handleSelectCategory = (index: number) =>{
    const selected = itemRef.current[index];
    setActiveIndex(index);

    // selected?.measure((x) =>{
    //     scrollRef.current?.scrollTo({x:x, y: 0, animated:true})
    // });
    selected?.measureLayout(
        scrollRef.current as any, // Reference to the ScrollView
        (x) => {
          // x is the distance of the item from the start of the ScrollView
          scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
        },
        () => {
          console.warn("Failed to measure layout");
        }
      );

      onCategoryChanged(destinationCategories[index].title);  
  };
   
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 14,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] = el }
            onPress={() => handleSelectCategory(index)}
            style={activeindex === index ? styles.categoryBtnActive : styles.categoryBtn}
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeindex === index ? Colors.white : Colors.black}
            />
            <Text style={activeindex === index ? styles.categoryBtnTxtActive : styles.categoryBtnTxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.black,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    // shadowColor:"#333333",
    // shadowOffset:{ width:1, height:2 },
    // shadowOpacity: 0.1,
    // shadowRadius:3,
    elevation: 3,
  },
  categoryBtnActive:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 3
  },
  categoryBtnTxt:{
    marginLeft:5,
    color:Colors.black
  },
  categoryBtnTxtActive:{
    marginLeft:5,
    color:Colors.white
  }
});