sales = [
    {name: "iphone", price:100, quantity: 10},
    {name: "samsung", price:50, quantity: 8},
    {name: "onepluse", price:80, quantity: 5}
];
taxrate = 8;
sum = sales.reduce((sum, i) => sum + i.price * i.quantity, 0);
TotalSales = sum + sum*taxrate/100;

console.log(TotalSales);
