
function mySet(){

    //array collection to hold the set.
    var collection =[];

    //check if the element is presence and return true or false.
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };

    //return all the value in set
    this.values = function(){
        return collection;
    };

    //add element to set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    //remove element from set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;

    };

    //return the size of a set
    this.size = function(){
        return collection.length;
    };

    //return the union of set.
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values;
        var secondSet = otherSet.values;

        firstSet.forEach(function(element){
            unionSet.add(element);
        });

        secondSet.forEach(function(element){
            unionSet.add(element);
        });
        return unionSet;
    };

    //return the intersection as a net set.
    this.intersection=function(otherSet){
        var instersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(element){
            if(otherSet.has(element)){
                instersectionSet.add(element);
            }
        });
        return instersectionSet;
    };

    //return the difference of two sets as sa new set.
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(v){
            if(!otherSet.has(v)){
                differenceSet.add(v);
            }
        });
        return differenceSet;
    };

    //check if the otherSet is a subset of difference set.
    this.subset=function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(v){
            return otherSet.has(v);
        });
    };
    

}