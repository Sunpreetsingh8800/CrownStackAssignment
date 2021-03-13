import React, {useEffect} from 'react';
import {StatusBar, Image, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Theme} from '../../theme';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.metallicBlue}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.splashText}>Splash Screen Without Image</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Splash;
