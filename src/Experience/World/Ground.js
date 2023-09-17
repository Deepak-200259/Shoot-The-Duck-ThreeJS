import {
  CircleGeometry,
  Mesh,
  MeshPhongMaterial,
  PlaneGeometry,
  RepeatWrapping,
  SRGBColorSpace,
} from "three";
import Experience from "../Experience";

export default class Ground {
  constructor() {
    this.experience = new Experience();
    const { scene, resources } = this.experience;
    this.scene = scene;
    this.resources = resources;
    this.setGround();
  }

  setGround() {
    this.ground = new Mesh(
      new CircleGeometry(100, 64),
      new MeshPhongMaterial({
        map: this.resources.items.grassColorTexture,
        normalMap: this.resources.items.grassNormalTexture,
      })
    );
    this.ground.receiveShadow = true;
    this.setGroundTextures();
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.y = -0.45;
    this.scene.add(this.ground);
  }

  setGroundTextures() {
    const { map, normalMap } = this.ground.material;
    map.colorSpace = SRGBColorSpace;
    map.repeat.set(100, 100);
    map.wrapS = RepeatWrapping;
    map.wrapT = RepeatWrapping;

    normalMap.repeat.set(100, 100);
    normalMap.wrapS = RepeatWrapping;
    normalMap.wrapT = RepeatWrapping;
  }
}
