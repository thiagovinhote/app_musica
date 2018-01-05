import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  section: {
    margin: metrics.baseMargin,
  },

  sectionTitle: {
    color: colors.capeCod,
    fontWeight: 'bold',
    fontSize: fonts.bigger,
    alignSelf: 'flex-start',
    marginBottom: metrics.baseMargin,
  },
};

export default general;
