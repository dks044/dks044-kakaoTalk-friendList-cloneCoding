import { StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButtonMap = new Map();
IconButtonMap.set(1,'search-outline');
IconButtonMap.set(2,'person-add-outline');
IconButtonMap.set(3,'musical-notes-outline');
IconButtonMap.set(4,'settings-outline');

const IconButton = (props) => {
  return (
    <View style={{paddingHorizontal:6}}>
      <Ionicons name={props.name} size={24} color="black" />
    </View>
  )
};

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>
      <View style={{flexDirection: "row"}}>
        <IconButton name={IconButtonMap.get(1)}/>
        <IconButton name={IconButtonMap.get(2)}/>
        <IconButton name={IconButtonMap.get(3)}/>
        <IconButton name={IconButtonMap.get(4)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent:"space-between",
    paddingVertical: 10, //padding bottom&top 동시에
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  icon: {
    flexDirection: "row"
  }
})