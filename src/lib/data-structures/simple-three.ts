import { fromJSON } from "postcss";

export interface ISimpleThree {
  id: string;
  children?: ISimpleThree[] | null;
  parent?: ISimpleThree | null;
  name: string;
  addChild: (child: ISimpleThree) => ISimpleThree;
  removeChild: (child: ISimpleThree) => void;
  getChild: (name: string) => ISimpleThree | void;
  setName: (name: string) => ISimpleThree | void;
  getChildren: () => ISimpleThree[] | null | void;
  getParent: () => ISimpleThree | null | undefined;
  setParent: (parent: ISimpleThree) => void;
  getRoot: () => ISimpleThree | void;
  getDepth: () => number;
  findByid: (id: string) => ISimpleThree | void;
  toJSON: () => object;
  // Remove the fromJSON method from the interface as it should be a static method in the class
}

export default class SimpleThree implements ISimpleThree {
  id: string;
  name: string;
  parent?: ISimpleThree | null;
  children?: ISimpleThree[] | null;
  constructor({
    name,
    parent,
    children,
  }: {
    name: string;
    parent?: ISimpleThree | null;
    children?: ISimpleThree[] | null;
  }) {
    this.parent = parent || null;
    this.id = parent ? `${parent.id}/${name}` : name;
    this.children = children
      ? children.map((c) => {
          c.setParent(this);
          return c;
        })
      : null;
    this.name = name;
  }

  addChild(child: ISimpleThree): ISimpleThree {
    if (!this.children) {
      this.children = [];
    }
    this.children.push(child);
    return child;
  }
  removeChild(child: ISimpleThree) {
    if (!this.children) {
      return;
    }
    this.children = this.children.filter((c) => c !== child);
  }
  getChild(name: string) {
    if (!this.children) {
      return;
    }
    return this.children.find((c) => c.name === name);
  }
  setName(name: string): ISimpleThree | void {
    this.id = this.id.replace(this.name, name);
    this.name = name;
    return this;
  }

  getChildren() {
    return this.children;
  }
  getParent() {
    return this.parent;
  }
  setParent(parent: ISimpleThree) {
    this.parent = parent;
  }
  getRoot(): ISimpleThree | void {
    const parent = this.getParent();
    return parent ? parent.getRoot() : undefined;
  }
  getDepth() {
    const parent = this.getParent();

    return parent ? parent.getDepth() + 1 : 0;
  }
  findByid(id: string): ISimpleThree | void {
    if (this.id === id) {
      return this;
    }
    if (!this.children) {
      return;
    }
    for (const child of this.children) {
      const result = child.findByid(id);
      if (result) {
        return result;
      }
    }
  }

  toJSON(): object {
    return {
      name: this.name,
      children: this.children
        ? this.children.map((child) => child.toJSON())
        : null,
      // Add other properties as needed
    };
  }

  static fromJSON(json: any) {
    console.log(json);

    // console.log(
    //   json.children.map((child: ISimpleThree) => SimpleThree.fromJSON(child))
    // );
    const children = json.children
      ? json.children.map((child: ISimpleThree) => SimpleThree.fromJSON(child))
      : undefined;
    console.log(children);

    return new SimpleThree({
      name: json.name,
      children: children,
      // Add other properties as needed
    });
  }
}
