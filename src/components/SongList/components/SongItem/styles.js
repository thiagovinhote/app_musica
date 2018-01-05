import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },

  image: {
    width: 50,
    resizeMode: 'cover',
    borderRadius: metrics.tinyRadius,
  },

  songInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: metrics.mediumMargin,
  },

  title: {
    color: colors.capeCod,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    paddingVertical: metrics.tinyMargin,
  },

  description: {
    color: colors.grayChateau,
    fontWeight: '600',
    fontSize: fonts.small,
  },
});

export default styles;
