import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { ShoppingListLocalService } from './../../services/shopping-list/shopping-list-local.service';
import { Item } from './../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	shoppingList:  Item[] = [];

  constructor(
  	public navCtrl: NavController,
  	private shopping: ShoppingListLocalService
  ) {
  	  this.shopping.getShoppingList().then((val) => {
        this.shoppingList = val;
      });
  }
}
