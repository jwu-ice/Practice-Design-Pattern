import Component from "../core/Component.js";
import { $ } from "../util/util.js";

export default class ItemAppender extends Component {
  template() {
    return `<input type="text" class="appender" placeholder="아이템 내용 입력" />`;
  }

  setEvent() {
    const { addItem } = this.props;
    this.addEvent("keydown", ".appender", ({ key, target }) => {
      if (key === "Enter") {
        addItem(target.value);
      }
    });
  }

  mounted() {
    $(".appender").focus();
  }
}
