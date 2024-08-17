import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default (props) => {
  return (
    <TouchableOpacity style={styles.TabBarButton} onPress={props.onPressTo}>
      {props.iconType === 'material' && (
        <MaterialIcons
          style={{
            color: props.selectIndex ? 'black' : 'grey'
          }} // selectIndex 확인
          name={props.name}
          size={props.selectIndex ? 30 : 24}
        />
      )}
      {props.iconType === 'fontawesome' && (
        <FontAwesome
          style={{
            color: props.selectIndex ? 'black' : 'grey'
          }} // selectIndex 확인
          name={props.name}
          size={props.selectIndex ? 30 : 24}
        />
      )}
      {props.iconType === 'fontawesome6' && (
        <FontAwesome6
          style={{
            color: props.selectIndex ? 'black' : 'grey'
          }} // selectIndex 확인
          name={props.name}
          size={props.selectIndex ? 30 : 24} 
          />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  TabBarButton: {
    width: "100%",
    flex: 1,
    alignItems: 'center', // 아이콘 중앙 정렬
    justifyContent: 'center', // 아이콘 중앙 정렬
  }
});
