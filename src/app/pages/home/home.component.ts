import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent {

  slides = [
    {name: "slide1", img: "assets/imgs/pizza.jpg"},
    {name: "slide2", img: "assets/imgs/panquecas.jpg"},
    {name: "slide3", img: "assets/imgs/pizza.jpg"},
  ]

  icons = [
    "assets/imgs/beer.svg",
    "assets/imgs/burger.svg",
    "assets/imgs/pizza-slice.svg",
    "assets/imgs/fried-potatoes.svg"
  ]
}
