import { Application } from "stimulus";
import { registerControllers } from "./lib/helpers";

window.Stimulus = Application.start();
registerControllers(window.Stimulus);
