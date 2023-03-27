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
          Projet 1 : Application web de Gestion Scolaire <br />
          Projet 2 : Application web de Gestion de cours en ligne
        </p>
      </div>
      <div className="exp-2">
        <h4> Développeur Full Stack | MASCO </h4>
        <h5> Depuis le 21 Mars 2022 - </h5>
        <p>
          <b>Projet 1 </b> : Application web de Gestion Bibliothèque & API REST
          communicant avec une application Angular 13 comme FrontEnd
          <br /> Outils : framework Symfony , Angular 13
          <br /> <br />
          <b> Projet 2 </b>: conception et réalisation d'une plateforme web to
          mobile de collecte et d'analyse des données prélevées aux niveaux des
          unités laitières pour le compte du ministère de l’élevage : <br />
          <b>API REST </b> avec <b> symfony </b> communicant avec une
          application <b> Angular 13 </b> comme frontent ,<b> MongoDB </b> :
          pour stocker les formulaires dynamique <b>NodeJS</b>: pour la
          communication du frontend avec la base <b>Mongo</b>, et <b>Mysql</b>{" "}
          pour enregistrement des données issu des formulaires
          <br /> MongoDB : pour stocker les formulaires dynamique
          <br /> NodeJS: pour la communication du frontend avec la base Mongo,
          <br /> Mysql pour enregistrement des données issu des formulaires
        </p>
        <p>
          <br />
          <b> Projet 3 </b> : Application de Gestion de Collecte : Une
          application de gestion de collecte utilisant les technologies Angular,
          MongoDB, Mysql, Symfony et NodeJS. Cette application permet la
          création de formulaires dynamiques pour la collecte d'informations, la
          récupération et l'affichage de données ainsi que la génération de
          statistiques personnalisées en fonction de chaque formulaire.
          <br />
          <b>Outils </b>
          <br /> Angular 13 : Coté frondent comminucant avec le backend symfony
          <br /> framework Symfony : Avec API REST pour exposer les routes coté
          backend
          <br /> MongoDB : pour stocker les formulaires dynamique
          <br /> NodeJS: pour la communication du frontend avec la base Mongo,
          <br /> Mysql pour enregistrement des données issu des formulaires
        </p>
      </div>
    </div>
  );
};

export default Experience;
