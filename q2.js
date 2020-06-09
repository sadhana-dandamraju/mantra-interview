
var LocalStorage = require('node-localStorage').LocalStorage;
localStorage=new LocalStorage('/scratch');

function fetch_cached(){
    if(localStorage.getItem("result")==null){
        getFromLocalCache();
    }
    else{
        console.log(localStorage.getItem("result"));
    }
}
function getFromLocalCache(){
        const axios = require('axios');
        axios.get('http://reqres.in/api/users/1')
          .then(function (response) {
            localStorage.setItem("result",response.data.data['first_name']);
          })
          .catch(function (error) {
            console.log(error);
          })
}
 
fetch_cached();

