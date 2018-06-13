module.exports = {
  camel_to_snake : function(str) {
    var result = str.split('').map(function(e, i) {
      if (e === e.toUpperCase()) {
        if (i) {
          return '_' + e.toLowerCase();
        } else {
          return e.toLowerCase(); 
        }
      }
      return e;
    }).join('');

    return result;
  },

  snake_to_camel : function(str) {
     var result = str.split('_').map(function(e, i) {
       return e.replace(e[0], e[0].toUpperCase()); 
       return i ? e.replace(e[0], e[0].toUpperCase()) : e; 
     }).join('');
     return result;
    }
}


