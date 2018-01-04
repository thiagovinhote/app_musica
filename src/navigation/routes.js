import { StackNavigator, TabNavigator } from 'react-navigation';

import Footer from 'components/Footer';

import Treding from 'pages/treding';
import Search from 'pages/search';
import Album from 'pages/album';

const TredingRoutes = StackNavigator({
  Treding: { screen: Treding },
  Album: { screen: Album },
}, {
  headerMode: 'none',
});

const Routes = TabNavigator({
  Treding: { screen: TredingRoutes },
  Search: { screen: Search },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

export default Routes;
