import { StackNavigator, TabNavigator } from 'react-navigation';

import Footer from 'components/Footer';

import Treding from 'pages/treding';
import Search from 'pages/search';
import Album from 'pages/album';
import Song from 'pages/song';

const TredingRoutes = StackNavigator({
  Treding: { screen: Treding },
  Album: { screen: Album },
}, {
  headerMode: 'none',
});

const MainRoutes = TabNavigator({
  Treding: { screen: TredingRoutes },
  Search: { screen: Search },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

const Routes = StackNavigator({
  Main: { screen: MainRoutes },
  Song: { screen: Song },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default Routes;
