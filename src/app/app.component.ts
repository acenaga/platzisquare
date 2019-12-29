import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  autor = 'Carlos Ferrer';
  company = 'Mundo Futuro';
  a = 8;
  b = 9;
  listo = false;
  nombre = '';
  apellido = '';
  lugares = [
    {plan:'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
    {plan:'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas La Pasadita'},
    {plan:'gratuito', cercania: 2, distancia: 5, active: false, nombre: 'Veterinaria Huellitas Felices'},
    {plan:'gratuito', cercania: 3, distancia: 10, active: true, nombre: 'Sushi sushiroll'},
    {plan:'pagado', cercania: 3, distancia: 35, active: true, nombre: 'hotel la gracia'},
    {plan:'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'zapateria el clavo'}
  ];
  lat = -34.6368443;
  lng = -58.5289941;

  personas =[
    {edad: 33, nombre: 'esteban de jesus'},
    {edad: 16, nombre: 'Caridad Canelon'},
    {edad: 25, nombre: 'De la rua '},
    {edad: 12, nombre: 'Mardita Kichsner'},
    {edad: 18, nombre: 'Alan Margarito'},
    {edad: 20, nombre: 'Cualquier verga'},
    {edad: 13, nombre: 'Me ladille de nombres'},
  ]

  constructor() {
    setTimeout(() => {
      this.listo = true;
    }, 3000 );
  }

  hacerAlgo() {
    alert('Haciendo Algo');
  }
}
