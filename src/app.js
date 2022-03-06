import Items from "./component/Items.js";
import { $ } from "./util/util.js";

class App {
  constructor() {
    const $app = $("#app");
    new Items($app);
  }
}

new App();
