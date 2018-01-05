/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
    backEnabled: PropTypes.bool,
    songEnabled: PropTypes.bool,
    closeEnabled: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: null,
    children: null,
    backEnabled: false,
    songEnabled: false,
    closeEnabled: false,
  };

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  };

  navigateSong = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.navigate({ routeName: 'Song' }));
  };

  renderHeaderTitle = () => (
    <View style={styles.headerContainer}>
      <View style={styles.leftButton}>
        { this.props.backEnabled &&
          <TouchableOpacity onPress={this.navigateBack}>
            <Icon style={styles.icon} name="angle-left" size={20} />
          </TouchableOpacity>}

        { this.props.closeEnabled &&
          <TouchableOpacity onPress={this.navigateBack}>
            <Icon style={styles.icon} name="angle-down" size={20} />
          </TouchableOpacity>}
      </View>

      <Text style={styles.title}>{this.props.title}</Text>

      <View style={styles.rightButton}>
        { this.props.songEnabled &&
          <TouchableOpacity onPress={this.navigateSong}>
            <Icon style={styles.icon} name="headphones" size={20} />
          </TouchableOpacity>}
      </View>
    </View>
  )

  render() {
    if (!this.props.children) {
      return this.renderHeaderTitle();
    }

    return (
      <View style={styles.headerContainer}>
        { this.props.children }
      </View>
    );
  }
}

export default connect()(Header);
