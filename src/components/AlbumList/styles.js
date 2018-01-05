import { StyleSheet } from 'react-native';
import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listSection: {
    marginHorizontal: 0,
  },

  listSectionTitle: {
    marginLeft: metrics.mediumMargin,
  },

  listItem: {
    marginHorizontal: metrics.smallMargin,
  },

  'listItem-first': {
    marginLeft: metrics.mediumMargin,
  },

  'listItem-last': {
    marginRight: metrics.mediumMargin,
  },

});

export default styles;
