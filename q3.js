const cheerio=require('cheerio');
const request=require('request');

request({
    method:'GET',
	url:'http://zetcode.com/javascript/cheerio/'
    },(err,res,body)=>{
        if(err) return console.log(err);
        let $=cheerio.load(body);

        let headElements = $('meta');

        filteredEls = headElements.filter(function (i, el) {
           return el.name=='meta' && el.type=='tag' ;
        });
        let items = filteredEls.get();
		console.log('Meta tags Count :'+ items.length);
		let i=1;
        items.forEach(e => {
			if(e.attribs.name==undefined){console.log(i+")Meta Desceiption is Empty");}
			else{console.log(i+')'+e.attribs.name);}   
			i++;			
        });
    }
)