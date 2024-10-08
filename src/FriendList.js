import { ScrollView, Text, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper"
import Margin from "./Margin"


export default (props) => {

  return (
    <>
      {props.isOpened ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: getBottomSpace }}>
          {props.data.map((item, index) => (
            <View key={index}>
              <Profile
                uri={item.uri}
                name={item.name}
                introduction={item.introduction}
              />
              <Margin height={13} />
            </View>
          ))}
        </ScrollView>

      ) : null}
    </>
  )
}