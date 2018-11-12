import React from "react";
import Header from "./Header";
import Title from "./Title";
import Cover from "./Cover";
import Item from "./Item";
import Button from "./Button";
import Subtitle from "./Subtitle";
import Description from "./Description";

import "./assets/style.css";

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <Header />
          <Title text="2001 : L'ODYSÉE DE L'ESPACE" />
          <div className="main">
            <Cover />

            <div className="right">
              <Item label="Date de reprise" text="7 mars 2001" />
              <Item label="Date de sortie" text="27 septembre 1968" />
              <Item label="De" text="Stanley Kubrick" />
              <Item
                label="Avec"
                text="Keir Dullea, Gary Lockwood, William Sylvester "
              />
              <Item label="Genre" text="Science fiction" />
              <Item label="Nationalités" text="Américain, Britannique" />

              <Button
                url="http://www.allocine.fr/video/player_gen_cmedia=19578220&cfilm=27442.html"
                text="Bande-annonce"
                theme="black"
              />
              <Button
                url="http://www.allocine.fr/seance/film-27442/pres-de-121554/"
                text="Séances (2)"
                theme="yellow"
              />
              <Button
                url="http://www.allocine.fr/film/fichefilm-27442/telecharger-vod/"
                text="Ce film en VOD"
                theme="grey"
              />
            </div>
          </div>

          <Subtitle text="SYNOPSIS ET DÉTAILS" />
          <Description
            text="A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né.
En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du Beau Danube Bleu. A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d'un monolithe noir qui émet d'étranges signaux vers Jupiter."
          />
        </div>
      </div>
    );
  }
}

export default App;
