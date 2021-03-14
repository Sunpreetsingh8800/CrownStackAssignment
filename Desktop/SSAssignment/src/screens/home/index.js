import React, {useEffect, useState} from 'react';
import {StatusBar, Image, View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Theme} from '../../theme';
import {homeOperations} from '../../api/homeOperations';
import {Header} from '../../components/common/header';
import {SongCard} from '../../components/common/songCard';
import {RouteNames} from '../../routeNames';

function Home({navigation}) {
  let [songsList, setSongsList] = useState([]);
  useEffect(() => {
    getSongsList();
  }, []);

  const getSongsList = async () => {
    const data = await homeOperations.getSongsList();
    if (data) setSongsList(data.results);
  };

  const navigateToDetailScreen = (item) => {
    navigation.navigate(RouteNames.SongDetailScreen, {item: item});
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.metallicBlue}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Header text={'Songs List'} />
          <FlatList
            data={songsList}
            keyExtractor={(item) => item.trackId}
            renderItem={({item}) => {
              return <SongCard onPress={navigateToDetailScreen} item={item} />;
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home;
