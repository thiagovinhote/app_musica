import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    borderTopWidth: 2,
    borderColor: colors.burningOrange,
  },

  content: {
    height: 96,
    backgroundColor: colors.gray,
    // borderBottomWidth: 1,
    // borderColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.mediumMargin,
    justifyContent: 'space-between',
  },

  leftContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  thumbnail: {
    height: 64,
    width: 64,
    resizeMode: 'cover',
    borderRadius: metrics.tinyRadius,
  },

  current: {
    flexDirection: 'column',
    marginHorizontal: metrics.mediumMargin,
    maxWidth: 250,
  },

  title: {
    color: colors.capeCod,
    fontSize: fonts.semiBig,
    fontWeight: '600',
  },

  description: {
    color: colors.grayChateau,
    fontSize: fonts.regular,
  },

  button: {
    width: 32,
    height: 32,
    backgroundColor: colors.burningOrange,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 16,
  },

  alignCenterPlay: {
    left: 1,
  },
});

export default styles;
