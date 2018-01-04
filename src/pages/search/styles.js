import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  searchInput: {
    flex: 1,
    height: 26,
    fontSize: fonts.smaller,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.smallMargin,
    borderRadius: 3,
    paddingVertical: 0,
  },
});

export default styles;
