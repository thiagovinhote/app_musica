import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 150,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },

  image: {
    height: 150,
    resizeMode: 'contain',
    borderRadius: metrics.tinyRadius,
  },

  title: {
    color: colors.capeCod,
    fontWeight: 'bold',
    marginTop: metrics.smallMargin,
    alignSelf: 'center',
  },

  description: {
    color: colors.grayChateau,
    fontSize: fonts.small,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default styles;
