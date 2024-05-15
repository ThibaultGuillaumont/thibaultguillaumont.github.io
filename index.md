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
        icon: fa-glasses
      - title: Entrepreneur
        text: Co-fondateur chez Holusion
        icon: fa-business-time
      - title: Enseignant
        text: Chargé d'un module d'entrepreneuriat à l'Esdhem
        icon: fa-chalkboard-teacher
      - title: Infographiste 3D
        text: Créateur de rendus 3D sous Blender
        icon: fa-cubes
      - title: Manager de projets
        text: Certifié Prince2 et expérience terrain
        icon: fa-project-diagram
      - title: Développeur web
        text: Vous croyez vraiment que ce site s'est fait tout seul ?
        icon: fa-laptop-code        

  - type: portfolio.html
    # this section has always ID 'portfolio'
    #section_id: portfolio
    background_style: bg-secondary
    projects:
      - title: Boulangerie artisanale
        text: Recette de baguette maison croustillante
        # the images are located in:
        # img/portfolio/fullsize
        # img/portfolio/thumbnails
        icon: baguette.jpg
        url: 'projects/baguette'
      - title: Le pipomètre
        text: Un detecteur de pipeau en Html
        icon: pipo.jpg
        url: 'pipometer'
      - title: Entrepreneuriat
        text: Holusion, une fabrication française de générateurs d'hologrammes.
        icon: holusion_lg.jpg
        url: 'https://holusion.com'
      - title: Front
        text: Un minijeu en développement HTML5.
        icon: front.jpg
        url: 'front'
      - title: Blender
        text: Logiciel de rendu 3D Open Source
        url: 'projects/blender'
        icon: escalier.jpg
      - title: Visite 360
        text: Exploration de vue à 360°
        url: 'projects/visite360'
        icon: panorama.jpg
      - title: eCorpus - Notre-Dame de Paris
        text: Mini-site sur les numérisations de décor de Notre-Dame
        url: 'projects/notredame'
        icon: ecorpus.jpg
        


  - type: aside.html
    section_id: aside
    title: Mon projet principal à découvrir ici
    actions:
      - title: Holusion
        url: https://holusion.com
        class: btn-light


  - type: timeline.html
    section_id: parcours
    title: Mon parcours !
    background_style: bg-dark text-white
    last_image: assets/img/timeline-end.png
    actions:
      - image: assets/img/portfolio/thumbnails/chine.jpg
        title: >+
          2008-2013
          **Iteem**
        text: >-
          Master en Ingénierie, Génie Industriel et Entrepreneurial au sein de l'Ecole Centrale de Lille et de Skema Business School
      - image: assets/img/portfolio/thumbnails/tonic.jpg
        title: >+
          2012 - 2014
          **Incubation Holusion**
        text: >-
          Incubation d'un projet entrepreneurial au sein de Tonic Incubation
      - image: assets/img/portfolio/thumbnails/holusion.jpg
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
