function propertyExists(obj,path) {
    // Write logic here
    // Base case
    if(path.length == 1){
        if(obj.hasOwnProperty(path) == true)
            return obj[path];
        else {
             return false;
           }
            
    }
    
    // Recursive call
    if(obj.hasOwnProperty(path[0]) == true){
        return propertyExists(obj[path[0]], path.slice(1));
    }
    else 
        return false;
}