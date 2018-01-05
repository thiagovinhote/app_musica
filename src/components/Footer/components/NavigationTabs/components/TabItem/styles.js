import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: fonts.smaller,
  },

  activeTitle: {
    color: colors.burningOrange,
  },

  inactiveTitle: {
    color: colors.capeCod,
  },

  activeIcon: {
    color: colors.burningOrange,
  },

  inactiveIcon: {
    color: colors.capeCod,
  },
});

export default styles;
