var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListLocalService } from './../../services/shopping-list/shopping-list-local.service';
import { ToastService } from './../../services/toast/toast.service';
/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddShoppingItemPage = /** @class */ (function () {
    function AddShoppingItemPage(navCtrl, navParams, shopping, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopping = shopping;
        this.toast = toast;
        this.item = {
            name: '',
            quantity: undefined,
            price: undefined
        };
    }
    AddShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingItemPage');
    };
    AddShoppingItemPage.prototype.addItem = function (item) {
        var _this = this;
        this.shopping.addItem(item).then(function (ref) {
            _this.toast.show(item.name + " added!");
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddShoppingItemPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-add-shopping-item',
            templateUrl: 'add-shopping-item.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ShoppingListLocalService,
            ToastService])
    ], AddShoppingItemPage);
    return AddShoppingItemPage;
}());
export { AddShoppingItemPage };
//# sourceMappingURL=add-shopping-item.js.map