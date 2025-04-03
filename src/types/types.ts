// ---------- User Profile ----------

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Address {
  company?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface UserProfile {
  user: User;
  address: Address;
}

// ---------- Order ----------

export interface Category {
  id: string;
  name: string;
  photo: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  manufacturer: string;
  photo: string;
  price: number;
  categoryId: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: Map<string, OrderItem>;
}

export interface InputOrder {
  id: string;
  product1Id?: string;
  product2Id?: string;
  product3Id?: string;
  product4Id?: string;
  product5Id?: string;
}

// ---------- Order UI Types ----------

export interface UiProduct {
  product: Product;
  category: Category;
}

export interface UiOrderItem {
  orderItem: OrderItem;
  uiProduct: UiProduct;
}

// ---------- Tree Structure ----------

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

/**
 * Converts a tree structure into a flat Map for efficient lookups by node ID.
 *
 * @template T - A type that extends TreeNode, allowing the function to work with any tree node type
 * @param {T} tree - The root node of the tree to convert
 * @returns {Map<string, T>} - A Map where keys are node IDs and values are the corresponding nodes
 *
 * @example
 * const tree = {
 *   id: "1",
 *   name: "root",
 *   children: [
 *     { id: "2", name: "child1" },
 *     { id: "3", name: "child2" }
 *   ]
 * };
 * const nodeMap = treeToMap(tree);
 * // nodeMap.get("2") returns the child1 node
 */
export function treeToMap<T extends TreeNode>(tree: T): Map<string, T> {
  // Initialize an empty Map to store the flattened tree structure
  const map = new Map<string, T>();

  /**
   * Recursively traverses the tree and adds each node to the Map.
   * @param {T} node - The current node being processed
   */
  function addNodeToMap(node: T) {
    map.set(node.id, node);

    if (node.children) {
      for (const child of node.children) {
        addNodeToMap(child as T);
      }
    }
  }

  // Start the recursive traversal from the root node
  addNodeToMap(tree);

  return map;
}
