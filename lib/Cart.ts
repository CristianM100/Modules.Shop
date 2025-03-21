interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  price_total: number; 
  slug: string;
  product: {
    name: string;
    slug: string;
    images: { file: { url: string } }[];
  };
}

interface CartData {
  items: CartItem[];
  sub_total: number; 
  checkout_url?: string; 
}

class CartService implements CartData {
  items: CartItem[] = [];
  sub_total: number = 0;
  //checkout_url?: string;
  checkout_url: string = '/checkout';

  async addItem(item: CartItem): Promise<CartData> {
    const existingItemIndex = this.items.findIndex(i => i.id === item.id);
    
    if (existingItemIndex !== -1) {
      const existingItem = this.items[existingItemIndex];
      this.sub_total -= existingItem.price_total;
      
      existingItem.quantity += item.quantity;
      existingItem.price_total = existingItem.price * existingItem.quantity;
      
      this.sub_total += existingItem.price_total;
    } else {
      item.price_total = item.price * item.quantity;
      this.items.push(item);
      this.sub_total += item.price_total;
    }
    
    return this;
  }

  async removeItem(itemId: string): Promise<CartData> {
    const itemIndex = this.items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      this.sub_total -= this.items[itemIndex].price_total;
      this.items.splice(itemIndex, 1);
    }
    return this;
  }

  async updateItem(itemId: string, quantity: number): Promise<CartData> {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      this.sub_total -= item.price_total;
      item.quantity = quantity;
      item.price_total = item.price * quantity;
      this.sub_total += item.price_total;
    }
    return this;
  }

  async setItems(items: CartItem[]): Promise<CartData> {
    this.items = items;
    this.sub_total = items.reduce((total, item) => total + item.price_total, 0);
    return this;
  }

  async get(): Promise<CartData> {
    return this;
  }
}

const cart = new CartService();

export const addToCart = async (item: CartItem): Promise<CartData> => {
  return await cart.addItem(item);
};

export const removeFromCart = async (itemId: string): Promise<CartData> => {
  return await cart.removeItem(itemId);
};

export const updateProductQuantity = async (itemId: string, quantity: number): Promise<CartData> => {
  return await cart.updateItem(itemId, quantity);
};

export const emptyTheCart = async (): Promise<CartData> => {
  return await cart.setItems([]);
};

export const getCart = async (): Promise<CartData> => {
  return await cart.get();
};

export type { CartData as Cart, CartItem };


/*
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  price_total: number; 
  slug: string;
  product: {
    name: string;
    slug: string;
    images: { file: { url: string } }[];
  };
}

interface Cart {
  items: CartItem[];
  sub_total: number; 
  checkout_url?: string; 
  addItem: (item: CartItem) => Promise<Cart>;
  removeItem: (itemId: string) => Promise<Cart>;
  updateItem: (itemId: string, quantity: number) => Promise<Cart>;
  setItems: (items: CartItem[]) => Promise<Cart>;
  get: () => Promise<Cart>;
}


const cart: Cart = {
  items: [],
  sub_total: 0,

  async addItem(item: CartItem): Promise<Cart> {
    this.items.push(item);
    this.sub_total += item.price_total;
    return this;
  },

  async removeItem(itemId: string): Promise<Cart> {
    const itemIndex = this.items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      this.sub_total -= this.items[itemIndex].price_total;
      this.items.splice(itemIndex, 1);
    }
    return this;
  },

  async updateItem(itemId: string, quantity: number): Promise<Cart> {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      this.sub_total -= item.price_total;
      item.quantity = quantity;
      item.price_total = item.price * quantity;
      this.sub_total += item.price_total;
    }
    return this;
  },

  async setItems(items: CartItem[]): Promise<Cart> {
    this.items = items;
    this.sub_total = items.reduce((total, item) => total + item.price_total, 0);
    return this;
  },

  async get(): Promise<Cart> {
    return this;
  }
};


export const addToCart = async (item: CartItem): Promise<Cart> => {
  return await cart.addItem(item);
};

export const removeFromCart = async (itemId: string): Promise<Cart> => {
  return await cart.removeItem(itemId);
};

export const updateProductQuantity = async (itemId: string, quantity: number): Promise<Cart> => {
  return await cart.updateItem(itemId, quantity);
};

export const emptyTheCart = async (): Promise<Cart> => {
  return await cart.setItems([]);
};

export const getCart = async (): Promise<Cart> => {
  return await cart.get();
};


export type { Cart, CartItem };
*/