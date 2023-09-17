import { Vector3 } from "three";
import Experience from "../Experience.js";
import Duck from "./Duck.js";
import Environment from "./Environment.js";
import Ground from "./Ground.js";
import Setup from "./Setup.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.ground = new Ground();
      this.tree = new Setup();
      this.duck = new Duck(new Vector3(0, 0.48, 0));
      this.environment = new Environment();
    });
  }

  update() {
    if (this.fox) this.fox.update();
  }
}
