import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  imageContainer: {
    flex: 1,
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: metrics.baseMargin,
  },

  imageBox: {
    height: 279,
    width: 279,
    borderRadius: metrics.baseRadius,
    shadowColor: colors.dark,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: metrics.tinyMargin,
  },

  image: {
    flex: 1,
    borderRadius: metrics.baseRadius,
  },

  infoSong: {
    padding: metrics.tinyMargin,
    marginTop: metrics.smallMargin,
  },

  title: {
    color: colors.capeCod,
    fontSize: fonts.bigger,
    fontWeight: '600',
    alignSelf: 'center',
  },

  description: {
    color: colors.grayChateau,
    fontSize: fonts.big,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: metrics.tinyMargin,
  },
});

export default styles;
