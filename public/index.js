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
      ],
      newTask: { text: "", completed: false }
    };
  },
  mounted: function() {},
  methods: {
    addTask: function() {
      if (this.newTask.text) {
        this.tasks.push(this.newTask);
        this.newTask = { text: "", completed: false };
      }
    },
    completeTask: function(inputTask) {
      inputTask.completed = !inputTask.completed;
    },
    deleteCompletedTasks: function() {
      var incompleteTasks = [];
      this.tasks.forEach(function(task) {
        if (!task.completed) {
          incompleteTasks.push(task);
        }
      });
      this.tasks = incompleteTasks;
      // OR USE THE FILTER METHOD
      // this.tasks = this.tasks.filter(function(task) {
      //   return !task.completed;
      // });
    },
    getNumberOfIncompleteTasks: function() {
      var count = 0;
      this.tasks.forEach(function(task) {
        if (!task.completed) {
          count = count + 1;
        }
      });
      return count;
      // OR USE THE FILTER METHOD
      // var incompleteTasks = this.tasks.filter(function(task) {
      //   return !task.completed;
      // });
      // return incompleteTasks.length;
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }]
});

var app = new Vue({
  el: "#app",
  router: router
});
