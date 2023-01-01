import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <div className="exp-1">
        <h4> Développeur et Administrateur de Site Web | SUNUCODE </h4>
        <h5> 27 Avril – 27 Juillet 2020| STAGIAIRE </h5>
        <p>
          Tâche :<br /> - Développer des pages Web
          <br /> - des modules de sites web
          <br /> - Modéliser et Structurer des bases de données avec SQL
          <br /> - Créer des sites web avec outils adaptés (Laravel , MySQL)
          <br />
          <br />
          Projet 1: Application web de Gestion Scolaire <br />
          Projet 2: Application web de Gestion de cours en ligne
        </p>
      </div>
      <div className="exp-2">
        <h4> Développeur Full Stack | SUNUCODE </h4>
        <h5> Depuis le 21 Mars 2022 - </h5>
        <p>
          Projet 1 : Application web de Gestion Bibliothèque & API REST
          communicant avec une application Angular 13 comme FrontEnd
          <br /> Outils : framework Symfony , Angular 13
          <br /> <br />
          Projet 2 : Conception et réalisation d'une plateforme web de collecte
          et d'analyse des données prélevées aux niveaux des unités laitières
          pour le compte du ministère de l’élevage
          <br /> ( sous la base de formulaires générés ) : API REST communicant
          avec une application Angular 13 comme FrontEnd ,
          <br /> MongoDB : pour stocker les formulaires dynamique
          <br /> NodeJS: pour la communication du frontend avec la base Mongo,
          <br /> Mysql pour enregistrement des données issu des formulaires
        </p>
      </div>
    </div>
  );
};

export default Experience;
