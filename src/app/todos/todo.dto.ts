export class Todo {
  title: string;
  isDone: boolean;

  constructor(values) {
    const { isDone = false } = values;
    Object.assign(this, values, { isDone });
  }
}
