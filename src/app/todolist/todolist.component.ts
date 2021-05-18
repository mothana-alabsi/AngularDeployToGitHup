import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { aimatein, fade, slides } from '../animations/aniamtion';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations: [
    trigger("slides", [
      transition(':enter', useAnimation(aimatein, { params: { second: '250ms', ease: 'ease-in' } })
      ),
      transition(':leave', [
        style({
          opacity: 0
        }),
        animate(2000)

      ]
      ),
    ])
  ]})

export class TodolistComponent {
  items: string[] = [
    "ahmaad",
    "mohammad",
    "mahmoud"
  ]
  constructor() { }
  addItem(itemsInput) {
    this.items.splice(0, 0, itemsInput.value);
    itemsInput.value = '';
  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);

  }


}
