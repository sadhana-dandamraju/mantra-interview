const cheerio=require('cheerio');
const request=require('request');

request({
    method:'GET',
    url:'http://webcode.me'
    },(err,res,body)=>{
        if(err) return console.log(err);
        let $=cheerio.load(body);

        let headElements = $('meta');

        filteredEls = headElements.filter(function (i, el) {
           return el.name=='meta' && el.type=='tag' ;
        });
        let items = filteredEls.get();
        items.forEach(e => {
            console.log(e.name);
        });
    }
)