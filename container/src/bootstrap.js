import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

productsMount(document.querySelector('#dev-products'));
cartMount(document.querySelector('#dev-cart'));