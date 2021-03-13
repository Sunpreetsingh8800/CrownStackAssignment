import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const Header = ({text}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Theme.colors.lightNavyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
