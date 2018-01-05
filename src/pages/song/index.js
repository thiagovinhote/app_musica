/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text } from 'react-native';
import ControllerComponent from 'components/Controller';
import Header from 'components/Header';
import { Player } from 'components/Footer/components/Player';

/* Redux */
import { connect } from 'react-redux';

import styles from './styles';

const Song = props => (
  <View style={styles.container}>
    <Header title="Tocando agora" closeEnabled />
    <View style={styles.imageContainer}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{ uri: props.player.song.thumbnail }}
        />
      </View>
    </View>

    <View style={styles.infoSong}>
      <Text style={styles.title}>{ props.player.song.title }</Text>
      <Text style={styles.description}>{ props.player.song.author }</Text>
    </View>

    <ControllerComponent />
  </View>
);

Song.propTypes = {
  player: PropTypes.shape({
    song: Player.propTypes.player.song,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Song);
