import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../Services/items.service';
import { Item } from '../Models/Items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemsService) { }
  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}
