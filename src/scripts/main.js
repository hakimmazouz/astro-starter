import { Application } from "stimulus";
import { registerControllers } from "./lib/helpers";
console.log("Boot!");

window.Stimulus = Application.start();
registerControllers(window.Stimulus);
