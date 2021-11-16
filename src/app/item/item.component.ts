import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;

  @Input() item: Item | undefined;
  @Input() newItem: string | undefined;
  @Output() remove = new EventEmitter<Item>();
  description: string | undefined;

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.description = description;
  }
}



