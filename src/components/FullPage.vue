<script lang="ts">
export default {
  data() {
    return {
      options: {
        licenseKey: "gplv3-license",
        menu: "#nav",
        anchors: ["home", "experience", "projects", "about_me"],
        // sectionsColor: ["#355C7D", "#6C5B7B", "#C06C84"],
        sectionsColor: ["#e0e2db", "#d2d4c8", "#b8bdb5", "#889696"],
        navigation: true,
      },
    };
  },
};
</script>

<template>
  <div id="container">
    <v-nav-bar id="nav">
      <ul id="myMenu">
        <v-row>
          <v-col>
            <li data-menuanchor="home" class="active">
              <a href="#home">Home</a>
            </li>
          </v-col>
          <v-col>
            <li data-menuanchor="experience">
              <a href="#experience">My developer experience</a>
            </li>
          </v-col>
          <v-col>
            <li data-menuanchor="projects">
              <a href="#projects">Personal projects</a>
            </li>
          </v-col>
          <v-col>
            <li data-menuanchor="about_me">
              <a href="#about_me">About me</a>
            </li>
          </v-col>
        </v-row>
      </ul>
    </v-nav-bar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">Miguel García, Game developer</div>
      <div class="section">I've worked as backend developer</div>
      <div class="section">Here are my projects</div>
      <div class="section">talking more about me...</div>
    </full-page>
  </div>
</template>

<style scoped>
#container {
  position: relative;
}
#fullpage {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}
#nav {
  width: 100%;
  padding-bottom: 2em;
  padding-top: 2em;
  background-color: transparent;
  position: fixed;
  z-index: 10;
  text-align: center;
}
#myMenu {
  list-style-type: none;
}
.section {
  color: black;
}
</style>
