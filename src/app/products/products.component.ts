import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public products: any;
  public keyWords: string = "";
  constructor() {

  }


  ngOnInit(): void {
    this.products =  [
      {id : 1, name: "Computer", price: 4300},
      {id : 2, name: "Printer", price: 254},
      {id : 3, name: "Smart Phone", price: 562},
      {id : 4, name: "Mouse", price: 1548},
    ]  
  }

  deleteProduct(index: any){
    this.products.splice(index, 1);
  }
}
