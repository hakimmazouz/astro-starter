import { Controller } from "stimulus";
import { Core } from "@unseenco/taxi";

export default class extends Controller {
  connect() {
    this.taxi = new Core({
      reloadCssFilter: () => true,
    });
  }
}
