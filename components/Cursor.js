import { Entity, Scene } from 'aframe-react'

const Cursor = () => (
  <Entity
    id="avatar"
    camera wasd-controls
    look-controls
    position="0 1.8 4.75"
  >
    <Entity primitive="a-cursor" id="cursor" color="#4CC3D9" fuse="true" maxDistance="20" timeout="3000" />
  </Entity>
)

export default Cursor
