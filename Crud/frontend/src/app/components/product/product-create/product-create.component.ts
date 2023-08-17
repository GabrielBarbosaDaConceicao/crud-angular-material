import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  fazerAlgo(): void {
    let p = document.querySelector('p');
    let texto = document.createTextNode("Alguma coisa");

    p?.appendChild(texto);
  }
}
