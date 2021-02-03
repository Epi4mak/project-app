import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  menrackets: any[] = [
    {
      link: "https://www.tennis-pro.ru/upload/resize_cache/iblock/c74/336_336_1/c74fc45e2b10d55c2c102c4a9b9a102e.jpeg",
      name: "Ракетка теннисная HEAD Graphene 360+ Speed Pro",
      desc: "Вес без струн - 310 г, площадь головы 645см кв, подходит игрокам профессионального уровня",
      price: "17.890"
    },
    {
      link: "https://www.tennis-pro.ru/upload/resize_cache/iblock/fbb/336_336_1/fbb237c34563f34c785f2214d60a5187.jpg",
      name: "Ракетка теннисная BABOLAT PURE BLACK",
      desc: "Вес без струн - 295 г, площадь головы 645см кв, подходит игрокам любительского уровня",
      price: "13.990"
    },
    {
      link: "https://www.tennis-pro.ru/upload/iblock/13a/13a540da70fbc8a69a26c583d2c1a607.jpg",
      name: "Ракетка теннисная HEAD Graphene 360+ Speed Pro",
      desc: "Вес без струн - 310 г, площадь головы 645см кв, подходит игрокам профессионального уровня",
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
