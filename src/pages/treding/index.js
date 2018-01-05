/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongListComponent, { SongList } from 'components/SongList';
import AlbumList from 'components/AlbumList';
import { Player } from 'components/Footer/components/Player';

/* Redux */
import { connect } from 'react-redux';
import TrendingSongsActions from 'store/ducks/trending-songs';
import RecommendedAlbumsActions from 'store/ducks/recommended-albums';

import styles from './styles';

class Treding extends Component {
  static propTypes = {
    trendingRequest: PropTypes.func.isRequired,
    recommendedRequest: PropTypes.func.isRequired,
    trendingSongs: PropTypes.shape({
      data: SongList.propTypes.songs,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    recommendedAlbums: PropTypes.shape({
      data: AlbumList.propTypes.albums,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    player: PropTypes.shape({
      song: Player.propTypes.player.song,
    }).isRequired,
  };

  componentDidMount() {
    this.props.trendingRequest();
    this.props.recommendedRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Em alta" songEnabled={this.props.player.song !== null} />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <SongListComponent
            title="Músicas em alta"
            songs={this.props.trendingSongs.data}
            loading={this.props.trendingSongs.loading}
          />

          <AlbumList
            title="Álbuns recomendados"
            albums={this.props.recommendedAlbums.data}
            loading={this.props.recommendedAlbums.loading}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  trendingSongs: state.trendingSongs,
  recommendedAlbums: state.recommendedAlbums,
  player: state.player,
});

const mapDispatchToProps = dispatch => ({
  trendingRequest: () => dispatch(TrendingSongsActions.trendingRequest()),
  recommendedRequest: () => dispatch(RecommendedAlbumsActions.recommendedRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Treding);
