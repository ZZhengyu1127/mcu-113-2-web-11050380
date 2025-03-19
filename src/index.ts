import { Product } from "./product";
let product = {
    id: 1,
    name: "圖像 Angular 開發入門 第二版",
    company: "博碩文化",
    price: 500,
    isShow: true,
    createDate: new Date("2024-4-10"),
    modifyDate: undefined,
};

new Product(
    1,
    "圖像 Angular 開發入門 第二版",
    "博碩文化",
    500,
    true,
    new Date("2024-4-10"),
    undefined,
);
console.log(product);
console.table(product);