---
layout: page
title: Blender
#background_style: bg-info
background_image: url('/assets/img/projects/escalier.png


sections:
- type: paragraph.html
  section_id: Blender
  title: "Eevee vs. Cycle"
#  background_style: bg-info
#  text_style: text-left text-white
  text: >

    ## Comparaison des moteurs de rendus Eevee et Cycles



- type : slider.html
  section_id: slider1
  img_1: slider/escalier-0204_cycle.png
  img_2: slider/escalier-0204.png

- type: paragraph.html
  section_id: Blender
  title: "Eevee vs. Cycle"
  #  background_style: bg-info
  #  text_style: text-left text-white
  text: >

      ## Découverte de Blender
- type : slider.html
  section_id: slider2
  img_1: slider/escalier.png
  img_2: slider/escalier-eevee.png

- type: paragraph.html
  section_id: Blender
  title: "Denoising"
  #  background_style: bg-info
  #  text_style: text-left text-white
  text: >

    Le Denoising est un outil permettant de faire converger beaucoup plus vite les rendus et de supprimer tous les artefacts, ou "fireflies" lié au modèle aléatoire du Path-tracing de Cycles.

    Voici des exemples avec 10 samples avec et sans le denoising.

    On observe tout de même qu'un nombre trop faible de samples entraîne toujours des artefacts, même si ils sont plus diffus.

- type : slider.html
  section_id: slider2
  img_1: slider/sample_10.png
  img_2: slider/sample_10_denoise.png

- type: paragraph.html
  section_id: Blender
  title: "Composition"
  #  background_style: bg-info
  #  text_style: text-left text-white
  text: >

    Le composing permet de rajouter après le rendu différents élements pour améliorer le rendu.

    Par exemple, les effets d'éblouissement et l'ambient occlusion pour faire ressortir les recoins.

- type : slider.html
  section_id: slider2
  img_1: slider/sample_500_denoise.png
  img_2: slider/sample_500_denoise_comp.png

---
