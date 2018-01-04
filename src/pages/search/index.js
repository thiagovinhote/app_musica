/* Core */
import React, { Component } from 'react';
import PropTyes from 'prop-types';
import * as _ from 'lodash';

/* Presentational */
import { View, TextInput, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongListComponent, { SongList } from 'components/SongList';

import { connect } from 'react-redux';
import SearchActions from 'store/ducks/search';

import styles from './styles';

class Search extends Component {
  static propTypes = {
    searchRequest: PropTyes.func.isRequired,
    searchEmpty: PropTyes.func.isRequired,
    search: PropTyes.shape({
      data: SongList.propTypes.songs,
      loading: PropTyes.bool,
      error: PropTyes.bool,
    }).isRequired,
  }
  constructor(props) {
    super(props);

    this.searchSongs = _.debounce(this.searchSongs, 500);
  }

  state = {
    searchText: '',
  };

  inputChangedText = (searchText) => {
    this.setState({ searchText });

    if (searchText.length > 0) {
      this.searchSongs();
    } else {
      this.props.searchEmpty();
    }
  }

  searchSongs = () => {
    this.props.searchRequest(this.state.searchText);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar músicas"
            placeholderTextColor="#999"
            onChangeText={this.inputChangedText}
            underlineColorAndroid="transparent"
          />
        </Header>

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >

          <SongListComponent
            showTitle={false}
            songs={this.props.search.data}
            loading={this.props.search.loading}
          />

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  searchRequest: search => dispatch(SearchActions.searchRequest(search)),
  searchEmpty: () => dispatch(SearchActions.searchEmpty()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
