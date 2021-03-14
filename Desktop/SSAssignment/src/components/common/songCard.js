import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Theme} from '../../theme';

export const SongCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.cardWrapper}>
      {item.artworkUrl30 && (
        <Image
          source={{uri: item.artworkUrl30}}
          style={{width: 70, height: 70}}
        />
      )}
      <View style={{marginLeft: 10}}>
        {item.trackName && (
          <Text style={styles.trackText}>{item.trackName}</Text>
        )}
        {item.collectionArtistName && (
          <Text style={styles.genreText}>
            {item.collectionArtistName}
            <Text style={{fontWeight: 'bold'}}>
              {`(${item.primaryGenreName})`}
            </Text>
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  genreText: {
    color: Theme.colors.dusk,
    marginTop: 5,
  },
  trackText: {
    color: Theme.colors.dusk,
    marginTop: 8,
  },
});
