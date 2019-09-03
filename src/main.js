import Vue from "vue";
import App from "./App.vue";

vue.directive("highlight", {});

new Vue({
  el: "#app",
  render: h => h(App)
});
