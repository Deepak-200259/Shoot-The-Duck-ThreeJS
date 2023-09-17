import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import Experience from "../Experience";

export default class Setup {
  constructor() {
    this.experience = new Experience();
    const { scene, resources } = this.experience;
    this.scene = scene;
    this.resources = resources;
    this.setBackground();
    this.setEnviornment();
    this.setBaseBox();
  }

  setBackground() {
    this.scene.background = this.resources.items.starsTexture;
    this.scene.background.colorSpace = SRGBColorSpace;
    this.scene.background.wrapS = RepeatWrapping;
    this.scene.background.wrapT = RepeatWrapping;
    this.scene.background.repeat.set(10, 10);
  }

  setEnviornment() {
    const world = this.resources.items.enviornment;
    world.scene.position.x = -1.5;
    world.scene.position.y = -0.4;
    world.scene.position.z = -13;
    world.scene.rotation.y = -(Math.PI / 180) * 20;
    world.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.scene.add(world.scene);
  }

  setBaseBox() {
    const baseBox = new Mesh(
      new RoundedBoxGeometry(3.5, 0.8, 3.5, 10, 5),
      new MeshStandardMaterial({ color: 0xff0000 })
    );
    baseBox.position.set(0, -0.05, 0);
    baseBox.castShadow = true;
    this.scene.add(baseBox);
  }
}
