import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  menrackets: any[] = [
    {
      link: "https://www.tennis-pro.ru/upload/resize_cache/iblock/c74/336_336_1/c74fc45e2b10d55c2c102c4a9b9a102e.jpeg",
      name: "Ракетка теннисная HEAD Graphene 360+ Speed Pro",
      desc: "Профессиональный уровень",
      price: "17.890"
    }
  ]

  menshoes: any[] = [
    {
      link: "",
      name: "Кроссовки Nike",
      desc: "Текст",
      price: "8.000"
    }
  ]
  constructor() { }
}
