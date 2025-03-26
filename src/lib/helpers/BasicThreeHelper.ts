import { BasicThree } from "@/types/types";

export class BasicThreeHelper {
  static makeThree = ({
    name,
    children,
  }: {
    name: string;
    children?: BasicThree[] | null;
  }) => {
    const three: BasicThree = {
      tag: name,
      // parent ? `${parent.id}/${name}` : name,
      name,
    };
    if (children) {
      children.forEach((child) => BasicThreeHelper.addChild(three, child));
    } else {
      three.children = null;
    }
    return three;
  };

  static addChild = (node: BasicThree, child: BasicThree): BasicThree => {
    if (!node.children) {
      node.children = [];
    }
    const childToPush = { ...child, tag: `${node.tag}/${child.tag}` };
    // BasicThreeHelper.setParent(child, node);
    node.children.push(childToPush);
    return childToPush;
  };
  static removeChild = (node: BasicThree, child: BasicThree) => {
    if (!node.children) {
      return;
    }
    node.children = node.children.filter((c) => c !== child);
  };
  static getChild = (node: BasicThree, name: string) => {
    if (!node.children) {
      return;
    }
    return node.children.find((c) => c.name === name);
  };
  static setName = (node: BasicThree, name: string): BasicThree | void => {
    console.log(node.tag);
    console.log(node.tag.split("/"));
    console.log(node.tag.split("/").slice(0, -1));
    console.log(node.tag.split("/").slice(0, -1).join("/") + "/" + name);
    console.log(node.tag.split("/").slice(0, -1).join("/"));
    node.name = name;
    node.tag = node.tag.split("/").slice(0, -1).join("/") + "/" + name; // replaceLastOccurrence(node.id, node.name, name);
    return node;
  };

  static getChildren = (node: BasicThree) => {
    return node.children;
  };
  static getParent = (node: BasicThree, target: BasicThree) => {
    const parentId: string = target.tag.split("/").slice(0, -1).join("/");

    return BasicThreeHelper.findByid(node, parentId);
  };
  // static setParent = (node: BasicThree, parent: BasicThree) => {
  //   node.parent = parent;
  // };
  static getRoot = (node: BasicThree): BasicThree | void => {
    return BasicThreeHelper.findByid(node, "/");
  };
  static getDepth = (node: BasicThree): number => {
    return node.tag.split("/").length;
  };
  static findByid = (node: BasicThree, tag: string): BasicThree | void => {
    if (node.tag === tag) {
      return node;
    }
    if (!node.children) {
      return;
    }
    for (const child of node.children) {
      const result = this.findByid(child, tag);
      if (result) {
        return result;
      }
    }
  };
}
