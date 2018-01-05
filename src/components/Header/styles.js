import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
  },

  title: {
    color: colors.capeCod,
    fontSize: fonts.big,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  leftButton: {
    width: 20,
  },

  icon: {
    color: colors.capeCod,
  },

  rightHidden: {
    width: 20,
  },
});

export default styles;
