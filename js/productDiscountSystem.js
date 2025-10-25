//problem 9: Product discount system
class Product{
  constructor (price){
    this._price = price;
  }
  get price(){
    return this._price;
  }
  set price(value){
    if (value < 0){
      return `Invalid number`;
    } else {
      this._price;
    }
  }
  static compare(a,b){
    if(a.price < b.price){
      return `product 1 has lower price`
    } else if(a.price > b.price) {
      return `product 2 has lower price`
    } else {
      `equal price`
    }
  }
}
const price1 = new Product(500)
const price2 = new Product(1000)
console.log(Product.compare(price1,price2));