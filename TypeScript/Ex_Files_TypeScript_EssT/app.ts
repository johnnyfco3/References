var todo = "Pick up dycleaning";
var name1 = "Jess";

var container = document.getElementById('container');

function countdown2(initial, final=0, interval=1){
    var current = initial;

    while(current > final){
        container.innerHTML = current;
        current -= interval;
    }
}

countdown2(10);    //or countdown2(10, 2, 5)


var todo1 = {
    id: 123,
    name: "Pick up dycleaning",
    completed: true
};

var display = `Todo ${todo1.name}`;