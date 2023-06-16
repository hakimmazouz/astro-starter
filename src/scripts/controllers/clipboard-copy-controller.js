import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["title"];

  connect() {
    console.log("Hello from clipboard_copy.js");
    console.log(this.titleTarget);
  }

  kaboom(e) {
    console.log("💥");
  }
}
