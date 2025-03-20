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
}

export default class SimpleThree implements ISimpleThree {
  id: string;
  name: string;
  parent?: ISimpleThree | null;
  children?: ISimpleThree[] | null;
  constructor(name: string, parent?: ISimpleThree, children?: ISimpleThree[]) {
    this.id = parent ? `${parent.id}/${name}` : name;
    this.children = children
      ? children.map((c) => {
          c.setParent(this);
          return c;
        })
      : null;
    this.parent = parent || null;
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
}
