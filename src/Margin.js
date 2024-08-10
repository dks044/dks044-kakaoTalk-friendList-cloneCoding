import { View } from "react-native";

// 직접 margin을 주는것은 유지보수에 용이하지 않으니, 
// 컴포넌트를 집어넣는것이 좋다
export default (props) =>{
  return <View style={{height: props.height}}/>
}