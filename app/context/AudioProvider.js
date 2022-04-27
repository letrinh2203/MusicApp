import {Text, View, Alert} from 'react-native';
import React, {Component, createContext} from 'react';
import * as MediaLibrary from '@pontusab/react-native-media-library';

export const AudioContext = createContext();
export class AudioProvider extends Component {
  constructor(props) {
    super(props);
  }
  permissonAlert = () => {
    Alert.alert('Permission Required', 'This app needs to read audio files!', 
    [
      {
        text: 'I am ready',
        onPress: () => this.getPermission(),
      },
      {
        text: 'cancle',
        onPress: () => this.permissonAlert(),
      },
    ]);
  };
  getAudioFiles = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
    });
    console.log(media);
  };
  getPermission = async () => {
    const permisson = await MediaLibrary.getPermissionAsync();
    if (permisson.granted) {
      //we want to get all the audio files
      this.getAudioFiles();
    }
    if (!permisson.granted && permisson.canAskAgain) {
      const {
        status,
        canAskAgain,
      } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'denied' && canAskAgain) {
        //we are going ti display alert that user must allow this permission to word this app
        this.permissonAlert();
      }
      if (status === 'granted') {
        //we want to get all the audio files
        this.getAudioFiles();
      }
      if (status === 'denied' && !canAskAgain) {
        //we want to display some error to the user
      }
    }
  };
  componentDidMount() {
    this.getPermission();
  }

  render() {
    return (
      <AudioContext.Provider value={{}}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioProvider;
