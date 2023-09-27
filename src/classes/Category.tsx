export interface ICategoryDetails {
  id: string;
  name: string;
}

export interface ICategory {
  getId(): string;
  getName(): string;
}

export default class Category implements ICategory {
  private id: string;
  private name: string;

  constructor({ id, name }: ICategoryDetails) {
    this.id = id;
    this.name = name;
  }

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
