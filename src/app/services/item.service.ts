import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  purchased: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [];
  private itemsSubject = new BehaviorSubject<Item[]>(this.items);

  getItems() {
    return this.itemsSubject.asObservable();
  }

  addItem(name: string) {
    const newItem: Item = {
      id: this.items.length + 1,
      name,
      purchased: false,
    };
    this.items.push(newItem);
    this.itemsSubject.next(this.items);
  }

  editItem(id: number, name: string) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.name = name;
      this.itemsSubject.next(this.items);
    }
  }

  togglePurchased(id: number) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.purchased = !item.purchased;
      this.itemsSubject.next(this.items);
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
    this.itemsSubject.next(this.items);
  }
}
