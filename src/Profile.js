import { Image, Text, View } from "react-native"
import Margin from "./Margin"


export default (props) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Image source={{uri: props.uri}}
        style={{
          width: props.isMyProfile ? 65 : 45,
          height: props.isMyProfile ? 65 : 45,
          borderRadius:20,
      }}/>
      <View style={{ marginLeft:5,justifyContent:"center"}}>
        <Text 
          style={{fontWeight:"bold", fontSize: props.isMyProfile ? 18 : 14,
        }}>
          {props.name}
        </Text>
        <Margin height={5}/>
        <Text 
          style={{fontSize : props.isMyProfile ? 15 : 12 ,
                  color:"grey",
        }}>
          {props.introduction}
        </Text>
      </View>
    </View>
  )
}