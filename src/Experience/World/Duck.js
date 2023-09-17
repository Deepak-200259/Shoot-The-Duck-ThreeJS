import { BoxGeometry, Mesh, MeshStandardMaterial, Vector3 } from "three";
import Experience from "../Experience";

export default class Duck {
  constructor(position = new Vector3(0, 0, 0)) {
    this.experience = new Experience();
    const { scene, resources } = this.experience;
    this.scene = scene;
    this.resources = resources;
    this.setDuck(position);
  }

  setDuck(position) {
    const duck = new Mesh(
      new BoxGeometry(0.3, 0.3, 0.3),
      new MeshStandardMaterial({ color: 0xffff00 })
    );
    duck.position.copy(position);
    this.scene.add(duck);
  }
}
