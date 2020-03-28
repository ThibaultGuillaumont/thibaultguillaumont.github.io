---
layout: home
header:
  title: Bienvenue sur le site de Thibault Guillaumont
  text: >
    Entrepreneur dans les technologies holographiques, l'innovation numérique, le DIY
  action: # action button is optional
    label: Plus d'informations
    url: '#about'


sections:
  - type: call-to-action.html
    section_id: about
    background_style: bg-secondary
    title: Mon site
    text: >
      Ce site a pour but de regrouper des ressources, formations et informations personnelles sur mon parcours.<br/>
    actions:
      - title: Mon parcours
        url: '#parcours'
        class: btn-light
      - title: Mes projets
        url: '#portfolio'
        class: btn-light
      - title: Ressources
        url: '#'
        class: btn-light        

  - type: services.html
    section_id: services
    #background_style: bg-info
    title: A votre service
    services:
      - title: Ingénieur
        text: Diplômé École Centrale de Lille
        icon: fa-gem text-info
      - title: Entrepreneur
        text: Co-fondateur chez Holusion
        icon: fa-paper-plane
      - title: Enseignant
        text: Chargé d'un module d'entrepreneuriat à l'Esdhem
        icon: fa-laptop-code
      - title: Infographiste 3D
        text: Créateur de rendus 3D sous Blender
        icon: fa-heart
      - title: Manager de projets
        text: Certifié Prince2 et expérience terrain
        icon: fa-heart
      - title: Développeur web
        text: Vous croyez vraiment que ce site s'est fait tout seul ?
        icon: fa-laptop-code        

  - type: portfolio.html
    # this section has always ID 'portfolio'
    #section_id: portfolio
    #background_style: bg-dark
    projects:
      - title: Boulangerie artisanale
        text: Recette de baguette maison croustillante
        # the images are located in:
        # img/portfolio/fullsize
        # img/portfolio/thumbnails
        icon: baguette.jpg
        url: 'projects/baguette'
      - title: Project 2
        text: This is a very short project description.
        icon: 2.jpg
        url: 'pipometer'
      - title: Project 3
        text: This is a very short project description.
        icon: 3.jpg
        url: '#'
      - title: Project 4
        text: This is a very short project description.
        icon: 4.jpg
        url: '#'
      - title: Project 5
        text: This is a very short project description.
        icon: 5.jpg
        url: '#'
      - title: Project 6
        text: This is a very short project description.
        icon: 6.jpg
        url: '#'

  - type: aside.html
    section_id: aside
    title: Mon projet principal à découvrir ici
    actions:
      - title: Holusion
        url: https://holusion.com
        class: btn-light


  - type: timeline.html
    section_id: timeline
    title: Mon parcours !
    background_style: bg-dark text-white
    last_image: assets/img/timeline-end.png
    actions:
      - image: assets/img/portfolio/thumbnails/1.jpg
        title: >+
          2008-2013
          **Iteem**
        text: >-
          Master en Ingénierie, Génie Industriel et Entrepreneurial au sein de l'Ecole Centrale de Lille et de Skema Business School
      - image: assets/img/portfolio/thumbnails/2.jpg
        title: >+
          2012 - 2014
          **Incubation Holusion**
        text: >-
          Incubation d'un projet entrepreneurial au sein de Tonic Incubation
      - image: assets/img/portfolio/thumbnails/2.jpg
        title: >+
          Mai 2014
          Création de **Holusion SAS**
        text: >-
          Installation de l'entreprise au cœur du site d'Excellence Numérique de la Plaine Images à Tourcoing        

  - type: contact.html
    section_id: contacts
    background_style : contact
    title: Restons en contact !
    text: >-
      Envie de démarrer un projet ? Discuter d'une nouvelle technologie ? M'assigner devant un tribunal ?
    actions:
    - title: +33 7 86 93 13 74
      icon: fa-phone
    - title: E-Mail
      icon: fa-envelope
      url: mailto:t.guillaumont@holusion.com
    - title: Twitter
      icon: fa-twitter
      icon_type: fab
      url: 'https://twitter.com/tguillaumont'
    - title: Facebook
      icon: fa-facebook
      icon_type: fab
      url: 'https://www.facebook.com/thibault.guillaumont'
    endText: >-
      Si c'est vraiment pour le tribunal. Je tiens à dire que c'est sûrement mon jumeau maléfique que vous cherchez en vrai.
---
