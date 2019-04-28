
// Input ['Name',priority] => ['Tanada',5]


function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(e){
      collection.push(e)  
    };

    this.dequeue = function(){
        collection.shift();
    };

    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}


function PriorityQueue(){
    var collection = [];
    this.PrintCollection = function(){
        (console.log(collection));
    }

    this.enqueue = function(e){
        if (this.isEmpty()){
            collection.push(e)
        } else {
            var added = false;
            for (var i=0 ; i< collection.length ; i++){
                if (e[1] < collection[i][1]){
                    collection.splice(i,0,e);
                    added =true;
                }
            }
            if (!added)
            {
                collection.push(element);
            }
        }
    };
    this.dequeue = function() { //tell who the 1st after dequeue
        var value = collection.shift();
        return value[0]; 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}