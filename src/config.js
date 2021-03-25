const id = window.location.search.split('=')[1];
export const PRODUCTAPI = `http://10.58.2.56:8000/product/${id}`;
export const CARTAPI = 'http://10.58.2.56:8000/order/cart';
export const WISHLISTAPI = 'http://10.58.0.59:8000/user/wishlist';
