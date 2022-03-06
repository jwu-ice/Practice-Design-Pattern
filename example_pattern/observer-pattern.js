class Book {
  #page = [];

  get page() {
    return this.#page;
  }

  add(...target) {
    if (!Array.isArray(target)) {
      target = [target];
    }
    this.#page.push(...target);
  }

  remove(target) {
    this.#page = this.#page.filter((page) => page !== target);
  }

  read() {
    console.log(this.#page);
  }
}

const 자바의정석 = new Book();
자바의정석.add("프롤로그", "안녕", "자바는 짱이다");
자바의정석.add("프롤로그");
자바의정석.read();
자바의정석.remove("프롤로그");
자바의정석.read();
