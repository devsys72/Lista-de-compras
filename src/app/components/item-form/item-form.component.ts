import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  itemName: string = '';

  constructor(private itemService: ItemService) {}

  addItem() {
    if (this.itemName.trim()) {
      this.itemService.addItem(this.itemName);
      this.itemName = '';
    }
  }
}
