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
  product1Id: string;
  product2Id: string;
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
