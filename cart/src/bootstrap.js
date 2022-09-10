import faker from 'faker';



const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

// Context #1 - Running in development
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('dev-cart');

  // we are assuming our container app does NOT have an html element called 'dev-cart'.
  // we are probably running in isolation
  if (el) mount(el);
}

// Context #2 - Running from Container
export { mount };