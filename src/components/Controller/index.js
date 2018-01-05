/* Core */
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

/* Presentational */
import { Player } from 'components/Footer/components/Player';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import PlayerActions from 'store/ducks/player';

import styles from './styles';

export const Controller = props => (
  <View style={styles.container}>
    <View style={styles.contentController}>
      <View style={styles.medium}>

        <TouchableOpacity style={styles.buttonStep}>
          <Icon name="step-backward" size={24} color="#FFF" />
        </TouchableOpacity>

        { props.player.paused &&
          <TouchableOpacity
            style={[styles.button, styles.buttonPlay]}
            onPress={props.playerPlay}
          >
            <Icon style={styles.alignCenterPlay} name="play" size={35} color="#FFF" />
          </TouchableOpacity> }

        { !props.player.paused &&
          <TouchableOpacity
            style={[styles.button, styles.buttonPlay]}
            onPress={props.playerPause}
          >
            <Icon name="pause" size={35} color="#FFF" />
          </TouchableOpacity>}

        <TouchableOpacity style={styles.buttonStep}>
          <Icon name="step-forward" size={24} color="#FFF" />
        </TouchableOpacity>

      </View>
    </View>
  </View>
);

Controller.propTypes = Player.propTypes;

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => ({
  playerPlay: () => dispatch(PlayerActions.playerPlay()),
  playerPause: () => dispatch(PlayerActions.playerPause()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
