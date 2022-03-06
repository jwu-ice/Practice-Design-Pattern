import Component from "../core/Component.js";
import { $, $$ } from "../util/util.js";

export default class Items extends Component {
  setup() {
    this.state = { items: ["item1", "item2"] };
  }

  template() {
    const { items } = this.state;
    return `
    <ul>
      ${items
        .map(
          (item, itemIndex) => `
      <li>${item}
        <button class="deleteBtn" data-index=${itemIndex}>삭제</button>
      </li>`
        )
        .join("")}
    </ul>
    <button class=addBtn>추가</button>`;
  }

  setEvent() {
    this.addEvent("click", ".addBtn", ({ target }) => {
      const { items } = [...this.state];
      console.log("items :>> ", items);
      const addItem = `item${items.length + 1}`;
      this.setState({ items: [...items, addItem] });
    });

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const { items } = [...this.state];
      console.log("items :>> ", items);
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
  }
}
