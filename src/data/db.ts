// le especifico que db va a ser un array del tipo que me he inventado yo, que es Album
import type { Album } from '../types/types'

export const db:Album[] = [  //este es un ARRAY DE OBJETOS con 9 albumes representados por objetos


  {
    id:0,
    title:"Reckless (1984 Reissue)",
    artist:"Bryan Adams",
    image:"/img/reckless_01.jpg",
    description:' "Reckless" is a melodic rock album that channels high energy and unrestrained emotion. Its songs capture the thrill of youth, boldness, and living without limits, blending powerful guitar riffs and heartfelt lyrics.',
    price:19.99

  },

  {
    id: 1,
    title: "Fearless (Taylor's Version)",
    artist: "Taylor Swift",
    image: "/img/fearless_02.png",
    description:
      "The re-recording of Fearless captures the feelings of nostalgia, young love, and memories of your hometown. With country and heartfelt melodies, the album tells stories of chasing dreams and letting some things behind.",
    price: 29.99,
  },

  {
    id: 2,
    title: "First Two Pages of Frankenstein",
    artist: "The National",
    image: "/img/firsttwo_03.webp",
    description:
      '"First Two Pages of Frankenstein" blends The National\'s melancholic indie rock with introspective lyrics, exploring memory, solitude, and emotional fragility through rich, atmospheric instrumentation.',
    price: 21.99,
  },

  {
    id: 3,
    title: "Plastic Hearts",
    artist: "Miley Cyrus",
    image: "/img/plastic_04.jpg",
    description:
      '"Plastic Hearts" delivers raw rock with powerful guitar riffs and gritty vocals. It channels heartbreak and unbridled spirit, capturing the record\'s wild energy and fearless attitude of constant reinvention and self-expression.',
    price: 35.99,
  },

  {
    id: 4,
    title: "Zach Bryan",
    artist: "Zach Bryan",
    image: "/img/zach_05.png",
    description:
      '"Zach Bryan" is a melodic country album that tells stories of love, loss, and life’s struggles. Its music blends gentle melodies with emotional lyrics, creating a reflective and moving listening experience.',
    price: 19.99,
  },

  {
    id: 5,
    title: "Mira Dentro",
    artist: "Maldita Nerea",
    image: "/img/mira_06.jpg",
    description:
      '"Mira Dentro" is a pop-rock album that explores themes of love and endless hope. Its melodies are uplifting and heartfelt, reflecting the Spanish band’s signature energetic and emotional style.',
    price: 16.99,
  },

  {
    id: 6,
    title: "Swimming",
    artist: "Mac Miller",
    image: "/img/swimming_07.jpg",
    description:
      '"Swimming" is Mac Miller’s fifth studio album. It explores themes of self-reflection, growth, and struggle. It blends hip-hop, jazz, and soul influences, capturing his journey through life, love, and mental health.',
    price: 49.99,
  },

  {
    id: 7,
    title: "Evermore",
    artist: "Taylor Swift",
    image: "/img/evermore_08.jpg",
    description:
      '"Evermore" is a folk and alternative album that reflects on the impermanence of life and nostalgia. Its sound captures moments of sadness, but with the hope that neither the good nor the bad lasts forever.',
    price: 39.99,
  },

  {
    id: 8,
    title: "Dawn FM",
    artist: "The Weeknd",
    image: "/img/dawn_09.jpg",
    description:
      "This synth-electronic album guides listeners through reflection on life, regrets, and acceptance. Its immersive production conveys a surreal journey toward light and resolution.",
    price: 13.99,
  },
  
];