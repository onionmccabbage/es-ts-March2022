var todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    }
];
var Job = /** @class */ (function () {
    function Job(todo) {
        this.userId = todo.userId;
        this.id = todo.id;
        this.title = todo.title;
        this.completed = todo.completed;
    }
    return Job;
}());
// consume some ToDo items
// console.log(typeof (todos)) // object with ONE member called 'todos'
var job1 = todos[0];
var job2 = new Job(todos[1]);
console.log(job1); // see subtle differences
console.log(job2); // this knows it's a 'Job' instance
var compareJobByDesc = function (a, b) {
    if (a.userId < b.userId) {
        return 1;
    }
    if (a.userId > b.userId) {
        return -1;
    }
    return 0;
};
var filterByUserId = function (a) {
    if (a.userId === 1) {
        return a;
    }
};
// sort and filter the array
console.log(todos.sort(compareJobByDesc));
// console.log(todos.filter(filterByUserId))
