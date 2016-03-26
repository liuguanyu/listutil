module.exports = {
    extractFields : (list, fields) => {
        let maps = {};

        fields.forEach(function (el){
            maps[el] = list[el]
        });   

        return maps;
    },

    extractFieldFromList : (list, field) => {
        let arr = [];

        for (let i in list){
            arr.push(list[i][field]);
        }   

        return arr;
    },

    createArrayByFields : function (list, fields) {
        let self = this;

        return list.map(item => {
            if ("[object Array]" == toString.call(fields)){
                return this.extractFields(item, fields);
            }
            return item[fields];
        });
    },

    arrayUnique : (arr) => {    
        let s = new Set();

        return arr.filter(function(o){
            if(s.has(o)){
                return false;
            }
            else{
                s.add(o);
                return true;
            }
        });
    },

    createKeyRecord : function (list, key, overwrite=true){
        let ret = {};

        list.forEach(function (el){
            if (overwrite){
                ret[el[key]] = el;
            }
            else{
                if (ret[el[key]] === undefined){
                    ret[el[key]] = [];
                }
                ret[el[key]].push(el);
            }
        });

        return ret;
    }
}
