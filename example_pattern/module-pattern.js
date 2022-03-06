class Student {
  name = "jwu";
  #grade = "A";
  #score = 96;

  get grade() {
    return this.#grade;
  }

  get score() {
    return this.#score;
  }

  get name() {
    return this.name;
  }
}

const student = new Student();
console.log(student.name);
console.log(student.grade);
console.log(student.score);
