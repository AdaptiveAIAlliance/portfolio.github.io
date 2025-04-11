import { BasicThree as BasicTree } from "@/types/types";

export class BasicTreeHelper {
  static makeThree = ({
    name,
    children,
  }: {
    name: string;
    children?: BasicTree[] | null;
  }) => {
    const tree: BasicTree = {
      tag: name,
      // parent ? `${parent.id}/${name}` : name,
      name,
    };
    if (children) {
      children.forEach((child) => BasicTreeHelper.addChild(tree, child));
    } else {
      tree.children = null;
    }
    return tree;
  };

  static addChild = (node: BasicTree, child: BasicTree): BasicTree => {
    if (!node.children) {
      node.children = [];
    }
    const childToPush = { ...child, tag: `${node.tag}/${child.tag}` };
    node.children.push(childToPush);
    return childToPush;
  };
  static removeChild = (node: BasicTree, child: BasicTree) => {
    if (!node.children) {
      return;
    }
    node.children = node.children.filter((c) => c !== child);
  };
  static getChild = (node: BasicTree, name: string) => {
    if (!node.children) {
      return;
    }
    return node.children.find((c) => c.name === name);
  };
  static setName = (node: BasicTree, name: string): BasicTree | void => {
    node.name = name;
    node.tag = node.tag.split("/").slice(0, -1).join("/") + "/" + name;
    return node;
  };

  static getChildren = (node: BasicTree) => {
    return node.children;
  };
  static getParent = (node: BasicTree, target: BasicTree) => {
    const parentId: string = target.tag.split("/").slice(0, -1).join("/");

    return BasicTreeHelper.findByid(node, parentId);
  };
  // static setParent = (node: BasicThree, parent: BasicThree) => {
  //   node.parent = parent;
  // };
  static getRoot = (node: BasicTree): BasicTree | void => {
    return BasicTreeHelper.findByid(node, "/");
  };
  static getDepth = (node: BasicTree): number => {
    return node.tag.split("/").length;
  };
  static findByid = (node: BasicTree, tag: string): BasicTree | void => {
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
