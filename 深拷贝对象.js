deepcopy(obj: any){
        var newobj = {};
        for(let arr in obj){
            if (typeof obj[arr]==='object' && obj[arr] !== null) {
                newobj[arr] = deepcopy(obj[arr]); //递归，核心代码
            } else {
                newobj[arr] = obj[arr];
            }
        }
        return newobj;
    }