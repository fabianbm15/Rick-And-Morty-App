const toJSON = (object) => {
   var keys = Object.keys(object);
   var JSONOut = '{';
   for (let i = 0; i < keys.length; i++) {
      JSONOut = JSONOut + `"${keys[i]}":"${object[keys[i]]}",`;
   }
   JSONOut = JSONOut + '}';
   return JSONOut;
};

module.exports = toJSON;
