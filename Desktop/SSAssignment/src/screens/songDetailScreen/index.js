import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StatusBar, Image, View, TouchableOpacity} from 'react-native';
import {Theme} from '../../theme';
import {Header} from '../../components/common/header';
import {styles} from './styles';

export const SongDetailScreen = ({navigation}) => {
  const {item} = navigation.state.params;
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.metallicBlue}
      />
      <SafeAreaView>
        <Header text={'Songs Details'} />
        <TouchableOpacity style={styles.previousWrapper} onPress={goBack}>
          <Text>{'<- Go to Previous Screen'}</Text>
        </TouchableOpacity>
        <View style={styles.paddingHorizontal}>
          <Image
            source={{uri: item.artworkUrl30}}
            style={styles.imageWrapper}
          />
          <Text style={styles.titleText}>
            Artist Name: {item.collectionArtistName}
          </Text>
          <Text style={styles.titleText}>
            Collection Name: {item.collectionName}
          </Text>
          <Text style={styles.titleText}>
            Collection Price: {item.collectionPrice}
          </Text>
          <Text style={styles.titleText}>
            Track Genre Name: {item.primaryGenreName}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
