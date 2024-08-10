import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FrientSection from './src/FrientSection';
import FriendList from './src/FriendList';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

//console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const onPressArrow = () => {
    console.log('clicked arrow!');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'right', 'bottom', 'left']} style={styles.container}>
        <Header />

        <Margin height={10} />

        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />

        <Margin height={15}/>

        <Division />

        <Margin height={15}/>

        <FrientSection 
          friendProfileLen={friendProfiles.length}
          onPress={onPressArrow}
        />
        <Margin height={10}/>
        <FriendList data={friendProfiles}/>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:15
  },
});
