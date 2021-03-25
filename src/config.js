const id = window.location.search.split('=')[1];
const PRODUCTAPI = `http://10.58.2.56:8000/product/${id}`;
const CARTAPI = 'http://10.58.2.56:8000/order/cart';
const WISHLISTAPI = 'http://10.58.0.59:8000/user/wishlist';
