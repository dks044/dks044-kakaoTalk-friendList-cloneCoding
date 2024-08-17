import { StyleSheet, View } from "react-native";
import TabBarButton from "./TabBarButton";
import { useState } from "react";

export default (props) => {
  const [selectedIndex,setSelectedIndex] = useState(0);

  return (
    <View style={styles.tabbar}>
      {props.data.map((item) => {
        return (
          <TabBarButton
            key={item.selectIndex} // key는 TabBarButton에서 설정
            selectIndex={selectedIndex === item.selectIndex}
            name={item.name}
            size={item.size}
            onPressTo={
              () => 
                { 
                  console.log(`${item.label} clicked!`); 
                  setSelectedIndex(item.selectIndex);
                }
              } 
            iconType={item.iconType}  
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    flexDirection: 'row', 
  }
});
