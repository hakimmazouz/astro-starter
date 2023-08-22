import Lenis from "@studio-freight/lenis";
import { Controller } from "stimulus";

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    this.raf = this.raf.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.lenis = new Lenis();

    requestAnimationFrame(this.raf);
  }

  raf(time) {
    this.lenis.raf(time);
    requestAnimationFrame(this.raf);
  }

  onScroll(e) {}
}
