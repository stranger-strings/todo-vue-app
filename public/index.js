/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [
        { id: 1, text: "Take out the garbage", completed: false },
        { id: 2, text: "Make the bed", completed: false },
        { id: 3, text: "Mow the lawn", completed: false }
      ]
    };
  },
  mounted: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }]
});

var app = new Vue({
  el: "#app",
  router: router
});
