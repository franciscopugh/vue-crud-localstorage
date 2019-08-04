const app = new Vue({

    el: '#app',
    data: {
        title: 'GYM WITH VUE',
        task: [],
        newTask: ''
    },

    methods: {
        addTask: function() {
            this.task.push({
                name: this.newTask,
                state: false
            });
            this.newTask = ''
        },
        editTask: function(index){
            this.task[index].state = true;
        },
        deleteTask: function(index){
            this.task.splice(index, 1);
        }
    }

});