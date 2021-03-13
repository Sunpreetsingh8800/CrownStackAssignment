import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.dusk,
  },
  dotIcon: {
    top: 0,
  },
  splashText: {
    fontSize: 18,
    color: '#fff',
  },
});
