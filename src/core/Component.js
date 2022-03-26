import { $$ } from "../util/util.js";

export default class Component {
  $target;
  props;
  state;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
  }
  setup() {}

  mounted() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...$$(selector, this.$target)];

    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (e) => {
      if (!isTarget(e.target)) return false;
      callback(e);
    });
  }
}

//* 아마 상속하는 Component 클래스는 최상단으로써 그 아래의 놈들이
//* 어떤 역할 하는지 스켈레톤코드? 형식으로써만 적혀있는 것 같다. 이런게 있다. 이정도?
//* 최상단 상속은 추상적으로 표현한듯..
