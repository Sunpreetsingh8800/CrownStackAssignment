import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: Theme.colors.dusk,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.dusk,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
  titleText: {
    fontSize: 16,
    color: Theme.colors.copperRose,
    marginTop: 8,
    fontWeight: 'bold',
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  previousWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
