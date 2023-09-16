import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <div className="exp-1" style={{ overflowY: "auto", maxHeight: "500px" }}>
        <h4> Développeur et Administrateur de Site Web | SUNUCODE </h4>
        <h5> 27 Avril – 27 Juillet 2020| STAGIAIRE </h5>
        <p>
          Tâche :
          <br /> - Concevoir et modéliser la structure de la base de données en
          utilisant des diagrammes UML ou des outils de modélisation de bases de
          données. <br /> - Créer, maintenir et optimiser la base de données
          MySQL. <br /> - Écrire des requêtes SQL pour effectuer des opérations
          de lecture, d'écriture et de modification des données. <br /> -
          Assurer la sécurité des données en mettant en œuvre des mécanismes
          d'authentification et d'autorisation appropriés. <br /> - Maintenir et
          refonte de projet existant <br /> - Utilisation de Laravel, un
          framework PHP, pour développer des applications web. <br /> - Créer
          des routes, des contrôleurs et des vues pour gérer les fonctionnalités
          de l'application. <br /> - Intégrer des modèles Eloquent pour
          interagir avec la base de données MySQL. <br /> - Implémenter des
          fonctionnalités spécifiques de l'application en suivant les
          spécifications fournies <br /> - Travailler en équipe en utilisant des
          systèmes de gestion de versions (Git)
          <br /> = Projet 1 : Application web de Gestion Scolaire <br /> -
          Projet 2 : Application web de Gestion de cours en ligne
        </p>
      </div>

      <div className="exp-2" style={{ overflowY: "auto", maxHeight: "500px" }}>
        <h4> Développeur Full Stack • MASCO </h4>
        <h5> 03/2022 – 08/2023 | STAGIAIRE </h5>

        <p>
          <br /> - Comprendre les exigences fonctionnelles et techniques du
          projet. <br /> - Collaborer avec les parties prenantes pour définir
          les spécifications.
          <br /> - Développer des API RESTful pour gérer les fonctionnalités
          côté serveur.
          <br /> - Mettre en place la gestion de l'authentification et de
          l'autorisation.
          <br /> - Gérer la persistance des données en utilisant des bases de
          données relationnelles (MySQL) et non relationnelles (MongoDB).
          <br /> - Effectuer des tests unitaires et d'intégration pour garantir
          la fiabilité du backend.
          <br /> - Optimiser les performances du backend en utilisant des caches
          et en améliorant les requêtes de base de données.
          <br /> - Créer une interface utilisateur conviviale en utilisant
          Angular et Bootstrap.
          <br /> - Gérer la navigation à l'intérieur de l'application à l'aide
          du routeur Angular.
          <br /> - Effectuer des appels API HTTP pour interagir avec le backend
          PHP (Symfony).
          <br /> - Assurer une expérience utilisateur optimale en effectuant des
          tests d'interface utilisateur (UI) et en résolvant les problèmes
          d'ergonomie.
        </p>
        <h5> Projet Réalisés </h5>

        <p>
          <br /> - Application de Gestion de Collecte de remontée de données :
          Formulaires générés dynamiquement, récupération et affichage de
          données, génération de statistiques personnalisées.
          <br /> - Application web de Gestion de Bibliothèque : API REST
          communicant avec une application Angular 13 comme front end.
          <br /> - Conception et réalisation d'une plateforme web-to-mobile de
          collecte et d'analyse des données prélevées au niveau des unités
          laitières pour le compte du ministère de l’élevage.
        </p>
      </div>
    </div>
  );
};

export default Experience;
