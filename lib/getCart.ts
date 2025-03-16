

export interface CartItem {
    productId: string;
    quantity: number;
  }
  
  export interface Cart {
    items: CartItem[];
    total: number;
  }
  
  export const addToCart = async (item: CartItem): Promise<Cart> => {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    return response.json();
  };
  
  export const removeFromCart = async (itemId: string): Promise<Cart> => {
    const response = await fetch(`/api/cart/${itemId}`, {
      method: 'DELETE',
    });
    return response.json();
  };
  
  export const updateProductQuantity = async (itemId: string, quantity: number): Promise<Cart> => {
    const response = await fetch(`/api/cart/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    });
    return response.json();
  };
  
  export const emptyTheCart = async (): Promise<Cart> => {
    const response = await fetch('/api/cart/empty', {
      method: 'POST',
    });
    return response.json();
  };
  
  export const getCart = async (): Promise<Cart> => {
    const response = await fetch('/api/cart', {
      method: 'GET',
    });
    return response.json();
  };
  