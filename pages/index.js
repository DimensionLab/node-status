import { Entity, Scene } from 'aframe-react'
import React from 'react'
import Cursor from '../components/Cursor'

export default class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appRendered: false
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('aframe')
      require('aframe-extras')
      require('super-hands')
      this.setState({ appRendered: true })
    }
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        {this.state.appRendered && <Scene fog="type: linear; color: #020202; far: 24; near: 6">
          <Cursor />
          <Entity primitive="a-image" src="static/img/dimensionlab.png" width="4" height="1.192" position="0 2.5 0" opacity="0">
            <a-animation attribute="opacity" begin="500" dur="2000" from="0" to="1"></a-animation>
          </Entity>

          <Entity
            primitive="a-image"
            id="redirect-text"
            src="static/img/redirect.png"
            width="1.8"
            height="0.07"
            position="0 0.8 0"
            opacity="0"
            look-at="#avatar"
          >
          </Entity>

          <Entity
            primitive="a-obj-model"
            id="github"
            src="static/models/github.obj"
            opacity="0"
            position="0 1.3 0"
            rotation="90 0 0"
            scale="8 8 8"
            events={{
              click: this.handleClick,
              collided: [this.handleCollide]
            }}
          >
            <a-animation attribute="opacity" begin="500" dur="2000" from="0" to="1"></a-animation>
            <a-event name="mouseenter" scale="8.5 8.5 8.5" color="#FFC65D"></a-event>
            <a-event name="mouseenter" target="#cursor" scale="2 2 2"></a-event>
            <a-event name="mouseenter" target="#redirect-text" opacity="1"></a-event>
            <a-event name="mouseleave" scale="8 8 8" color="white"></a-event>
            <a-event name="mouseleave" target="#cursor" scale="1 1 1"></a-event>
            <a-event name="mouseleave" target="#redirect-text" opacity="0"></a-event>
          </Entity>

          <Entity primitive="a-box" hoverable grabbable stretchable draggable dropppable
    color="blue" position="0 0 -1" />

          <Entity
            primitive="a-sky"
            color="black"
          />

          <Entity primitive="a-plane" static-body width="100" height="100" rotation="-90 0 0" position="0 0 0" material="src: static/img/noisy-texture.png; roughness: .5; metalness: 0; opacity: 1; repeat: 100 100" />

          <Entity primitive="a-light" type="spot" color="white" intensity="4" exponent="16" position="0 3.6 0" />
          <Entity primitive="a-light" type="hemisphere" color="white" groundColor="black" intensity=".5" />
          <Entity primitive="a-light" type="ambient" color="#AAA" intensity=".10" position="0 3 0" distance="7" />
        </Scene>}
      </div>
    )
  }
}
