/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView, Text, ImageBackground } from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';
import { AlbumItem } from 'components/AlbumList/components/AlbumItem';

import styles from './styles';

const Album = (props) => {
  const { album } = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Header title="Álbum" backEnabled />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          style={styles.background}
          source={{ uri: album.thumbnail }}
          blurRadius={6}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{ album.title }</Text>
            <Text style={styles.author}>{ album.author }</Text>
          </View>
        </ImageBackground>

        <SongList
          title="Músicas do Álbum"
          songs={album.songs}
        />
      </ScrollView>
    </View>
  );
};

Album.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        album: AlbumItem.propTypes.album,
      }),
    }),
  }).isRequired,
};

export default Album;
