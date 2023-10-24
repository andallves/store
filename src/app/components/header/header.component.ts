import { Component, Input } from "@angular/core";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input() testing...
}
