//Fake products data
import faker from "faker";
const NODE_ENV = process.env.NODE_ENV;

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

//check if in development and isolation - process.env.NODE_DEV through package.json
if (NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    //running in isolation
    mount(el);
  }
}

export { mount };
