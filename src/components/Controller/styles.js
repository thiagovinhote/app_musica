import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({

  contentController: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.baseMargin,
    margin: metrics.baseMargin,
  },

  medium: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: metrics.baseMargin,
  },

  button: {
    shadowColor: colors.dark,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: metrics.tinyMargin,
  },

  buttonStep: {
    width: 53,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 53 / 2,
  },

  buttonPlay: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.burningOrange,
    borderRadius: 85 / 2,
  },

  alignCenterPlay: {
    left: 2,
  },
});

export default styles;
