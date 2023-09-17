export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "textures/environmentMap/px.jpg",
      "textures/environmentMap/nx.jpg",
      "textures/environmentMap/py.jpg",
      "textures/environmentMap/ny.jpg",
      "textures/environmentMap/pz.jpg",
      "textures/environmentMap/nz.jpg",
    ],
  },
  {
    name: "starsTexture",
    type: "texture",
    path: "textures/stars.jpg",
  },
  {
    name: "grassColorTexture",
    type: "texture",
    path: "textures/dirt/color.jpg",
  },
  {
    name: "grassNormalTexture",
    type: "texture",
    path: "textures/dirt/normal.jpg",
  },
  {
    name: "foxModel",
    type: "gltfModel",
    path: "models/Fox/glTF/Fox.gltf",
  },
  {
    name: "treeModel",
    type: "gltfModel",
    path: "models/PineTree/scene.gltf",
  },
  {
    name: "enviornment",
    type: "gltfModel",
    path: "models/Enviornment/scene.gltf",
  },
];

export const TreesPositions = [
  { x: -6, y: 0, z: -4 },
  { x: -5.5, y: 0, z: -6 },
  { x: -4, y: 0, z: -4 },
  { x: 4, y: 0, z: -4 },
  { x: 5.5, y: 0, z: -6 },
  { x: 6, y: 0, z: -4 },
];
