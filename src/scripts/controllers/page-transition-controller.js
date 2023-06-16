import { Controller } from "stimulus";
import { Core } from "@unseenco/taxi";

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    this.taxi = new Core();
  }
}
