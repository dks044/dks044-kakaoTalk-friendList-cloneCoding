import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { friendProfiles, myProfile, tabbarDatas } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FrientSection from './src/FrientSection';
import FriendList from './src/FriendList';
import { useEffect, useState } from 'react';
import TabBar from './src/TabBar';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

//console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    console.log('clicked arrow!' + isOpened);
    setIsOpened(!isOpened);
  }
  const ItemSeparatorComponent = () => <Margin height={13} />
  const renderItem = ({ item }) => {
    return (
      <View>
        <Profile
          isMyProfile={false}
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
        />
      </View>
    )
  }
  const ListHeaderComponent = () => {
    return (
      <View>
        <Header />
        <Margin height={10} />

        <Profile
          isMyProfile={true}
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />

        <Margin height={15} />

        <Division />

        <Margin height={15} />

        <FrientSection
          friendProfileLen={friendProfiles.length}
          onPress={onPressArrow}
        />
        <Margin height={10} />
      </View>
    )
  }
  const ListFooterComponent = () => null ;
  

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'right', 'bottom', 'left']} style={styles.container}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          keyExtractor={(_, index) => index} //사용하지않는 argument는 _(언더바) 로 처리
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        />
      </SafeAreaView>
      <TabBar data={tabbarDatas}/>
    </SafeAreaProvider>
  )
}
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView edges={['top', 'right', 'bottom', 'left']} style={styles.container}>
//         <Header />

//         <Margin height={10} />

//         <Profile
//           uri={myProfile.uri}
//           name={myProfile.name}
//           introduction={myProfile.introduction}
//         />

//         <Margin height={15}/>

//         <Division />

//         <Margin height={15}/>

//         <FrientSection 
//           friendProfileLen={friendProfiles.length}
//           onPress={onPressArrow}
//         />
//         <Margin height={10}/>
//         <FriendList data={friendProfiles} isOpened={isOpened}/>

//       </SafeAreaView>
//       
//     </SafeAreaProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
});
