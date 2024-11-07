import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  togglePurchased(item: Item) {
    this.itemService.togglePurchased(item.id);
  }

  editItem(id: number, name: string) {
    const newName = prompt('Editar item:', name);
    if (newName) {
      this.itemService.editItem(id, newName);
    }
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id);
  }
}
