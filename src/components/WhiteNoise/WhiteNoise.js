import React, { Component } from 'react';
import AudioList from './AudioList';
import Message from './Message';
import Player from './Player';
import './WhiteNoise.css';

import babbling_stream from '../../audio/babbling_stream.mp3';
import campfire from '../../audio/campfire.mp3';
import commuter_train from '../../audio/commuter_train.mp3';
import haircut from '../../audio/haircut.mp3';
import morning_birds from '../../audio/morning_birds.mp3';
import rain from '../../audio/rain.mp3';
import summer_beach from '../../audio/summer_beach.mp3';
import tent from '../../audio/tent.mp3';
import thunder from '../../audio/thunder.mp3';
import winter_wave from '../../audio/winter_wave.mp3';
import wood_with_axe from '../../audio/wood_with_axe.mp3';

import babbling_stream_IMG from '../../assets/tomato.png';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioCurrent: {},
      audioList: [
        { title: '시냇물 소리', file: babbling_stream, img: babbling_stream_IMG },
        { title: '모닥불 소리', file: campfire, img: babbling_stream_IMG },
        { title: '열차 소리', file: commuter_train, img: babbling_stream_IMG },
        { title: '미용실 소리', file: haircut, img: babbling_stream_IMG },
        { title: '새 소리', file: morning_birds, img: babbling_stream_IMG },
        { title: '빗소리', file: rain, img: babbling_stream_IMG },
        { title: '해변 소리', file: summer_beach, img: babbling_stream_IMG },
        { title: '숲 소리', file: tent, img: babbling_stream_IMG },
        { title: '천둥 소리', file: thunder, img: babbling_stream_IMG },
        { title: '겨울 바람', file: winter_wave, img: babbling_stream_IMG },
        { title: '나무 베는 소리', file: wood_with_axe, img: babbling_stream_IMG }
      ]
    }
  }

  componentWillMount() {
    this.setState({ audioCurrent: this.state.audioList[0] });
  }

  onListItemClick(listItem) {
    this.setState({ audioCurrent: listItem })
  }

  render() {
    return (
      <div className='whiteNoise'>
        <h1 noMargin size="h1" color="white">White Noise</h1>

        <Message audioCurrent={this.state.audioCurrent} />

        <Player
          key={this.state.audioCurrent.title}
          file={this.state.audioCurrent.file}
        />

        <AudioList
          list={this.state.audioList}
          audioCurrent={this.state.audioCurrent}
          onClick={this.onListItemClick.bind(this)}
        />
      </div>
    );
  }
}

export default App1;