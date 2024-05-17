---
layout: page
title: Notre-Dame
#background_style: bg-info
background_image: url('/assets/img/backgrounds/ecorpus-bg.jpg')


sections:

- type: paragraph.html
  section_id: more-to-come
  title: "Présentation des décors numérisés au sein de la Cathédrale Notre-Dame de Paris"
#  background_style: bg-info
  text_style: text-justify
  text: >

    A l'occasion du chantier scientifique de Notre-Dame lors de la reconstruction suite à l'incendie du 19 avril 2019, de multiples élements du momuments ont été numérisé par les équipes de la plateforme Plemo3D et du Groupe de Travail Décor.

    Ce minisite est une reprise expérimentales de leurs travaux utilisés dans le cadre d'une exposition sur Notre-Dame à la Sorbonne Université d'Abu Dhabi en février 2024.

- type: ecorpus.html
  server: https://notredamedeparis.ecorpus.holusion.com
  scene: PIT38_Chap

- type: paragraph.html
  section_id: more-to-come
#  background_style: bg-info
  text_style: text-justify
  text: >

    Cloture du choeur



- type: ecorpus.html
  server: https://notredamedeparis.ecorpus.holusion.com
  scene: Cloture%20du%20Choeur

---

<script>
    function setTourStep(stepIdx) {
	// Get reference to the Explorer element by id
	var voyagerElement = document.getElementById("PIT38_Chap");
	
	// Call the setTourStep function with the value of the 
	// option input element as the parameter.
	// **Note the hard-coded tour index and interpolate flag.
	voyagerElement.setTourStep(0, 1, true);
}
</script>
