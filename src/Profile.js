import { Image, Text, View } from "react-native"
import Margin from "./Margin"


export default (props) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Image source={{uri: props.uri}} style={{width: 50, height: 50, borderRadius:20}}/>
      <View style={{ marginLeft:5,justifyContent:"center"}}>
        <Text style={{fontWeight:"bold", fontSize: 16}}>{props.name}</Text>
        <Margin height={5}/>
        <Text style={{fontSize : 12 , color:"grey"}}>{props.introduction}</Text>
      </View>
    </View>
  )
}