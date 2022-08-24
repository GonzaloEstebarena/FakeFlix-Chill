import { Component } from '@angular/core';
import { Films } from './models/films.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';


 public comedyFilms : Films={

  title:'Comedia',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Comedia/casi300.webp',
      alt:'Casi300s',
    },
    {
      src:'../assets/imagenesNetflix/images/Comedia/cazafantasmas.webp',
      alt:'CazaFantasmas',
    },
    {
      src:'../assets/imagenesNetflix/images/Comedia/dictador.webp',
      alt:'Dictador',
    },
    {
      src:'../assets/imagenesNetflix/images/Comedia/erasehollywood.webp',
      alt:'EraseHollywood',
    },
    {
      src:'../assets/imagenesNetflix/images/Comedia/juerga.webp',
      alt:'Juerga',
    },
    {
      src:'../assets/imagenesNetflix/images/Comedia/laterminal.webp',
      alt:'laterminal',
    }
]};

public accionFilms:Films={
  title:'Accion',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Accion/ejercitomuertos.jpg',
      alt:'ejercitomuertos',
    },
    {
      src:'../assets/imagenesNetflix/images/Accion/elprotector.webp',
      alt:'elprotector',
    },
    {
      src:'../assets/imagenesNetflix/images/Accion/equalizer2.webp',
      alt:'equalizer2',
    },
    {
      src:'../assets/imagenesNetflix/images/Accion/heat.webp',
      alt:'heat',
    },
    {
      src:'../assets/imagenesNetflix/images/Accion/johnwick2.webp',
      alt:'johnwick2',
    },
    {
      src:'../assets/imagenesNetflix/images/Accion/killbill2.webp',
      alt:'killbill2',
    }
]}

public top5:Films={
  title:'top',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Top10/1-papel.webp',
      alt:'1-papels',
    },
    {
      src:'../assets/imagenesNetflix/images/Top10/2-reina.webp',
      alt:'2-reina',
    },
    {
      src:'../assets/imagenesNetflix/images/Top10/3-titanes.webp',
      alt:'3-titanes',
    },
    {
      src:'../assets/imagenesNetflix/images/Top10/4-lostinspace.webp',
      alt:'4-lostinspace',
    },
    {
      src:'../assets/imagenesNetflix/images/Top10/5-dondecaben.webp',
      alt:'5-dondecaben',
    }

]}
public animeFilms:Films={
  title:'Anime',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Anime/ajin.jpg',
      alt:'ajin',
    },
    {
      src:'../assets/imagenesNetflix/images/Anime/castilloambulante.webp',
      alt:'castilloambulante',
    },
    {
      src:'../assets/imagenesNetflix/images/Anime/evangelion.webp',
      alt:'evangelion',
    },
    {
      src:'../assets/imagenesNetflix/images/Anime/gundam.webp',
      alt:'gundam',
    },
    {
      src:'../assets/imagenesNetflix/images/Anime/mononoke.webp',
      alt:'mononoke',
    },
    {
      src:'../assets/imagenesNetflix/images/Anime/perfectblue.webp',
      alt:'perfectblue',
    }
]}
public dramaFilms:Films={
  title:'Drama',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Drama/1917.webp',
      alt:'1917',
    },
    {
      src:'../assets/imagenesNetflix/images/Drama/arrival.webp',
      alt:'arrival',
    },
    {
      src:'../assets/imagenesNetflix/images/Drama/corazones.webp',
      alt:'corazones',
    },
    {
      src:'../assets/imagenesNetflix/images/Drama/naufrago.webp',
      alt:'naufrago',
    },
    {
      src:'../assets/imagenesNetflix/images/Drama/salvaralsoldado.webp',
      alt:'salvaralsoldado',
    },
    {
      src:'../assets/imagenesNetflix/images/Drama/scarface.webp',
      alt:'scarface',
    }
]}
public scifiFilms:Films={
  title:'Sci-fi',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Sci-fi/6dia.webp',
      alt:'6dia',
    },
    {
      src:'../assets/imagenesNetflix/images/Sci-fi/doom.webp',
      alt:'doom',
    },
    {
      src:'../assets/imagenesNetflix/images/Sci-fi/watchmen.webp',
      alt:'watchmen',
    },
    {
      src:'../assets/imagenesNetflix/images/Sci-fi/deepimpact.webp',
      alt:'deepimpact',
    },
    {
      src:'../assets/imagenesNetflix/images/Sci-fi/12monos.webp',
      alt:'12monos',
    },
    {
      src:'../assets/imagenesNetflix/images/Sci-fi/gits.webp',
      alt:'gits',
    }
]}
public terrorFilms:Films={
  title:'Terror',
  gallery:[{
      src:'../assets/imagenesNetflix/images/Terror/apostol.jpg',
      alt:'apostol',
    },
    {
      src:'../assets/imagenesNetflix/images/Terror/insidious2.webp',
      alt:'insidious2',
    },
    {
      src:'../assets/imagenesNetflix/images/Terror/life.webp',
      alt:'life',
    },
    {
      src:'../assets/imagenesNetflix/images/Terror/multiple.webp',
      alt:'multiple',
    },
    {
      src:'../assets/imagenesNetflix/images/Terror/malasana.webp',
      alt:'malasana',
    },
    {
      src:'../assets/imagenesNetflix/images/Terror/reflejos.webp',
      alt:'reflejos',
    }
]}
}


