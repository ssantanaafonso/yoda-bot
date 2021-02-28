import axios from 'axios';

export default class Question{

    constructor(query){
        this.query = query; 
          
    }

    async getAnswer(){

        const request = new XMLHttpRequest();
        const question = this.query;

        if(question.includes('force')){
            const promise = new Promise(function (resolve, reject){
                
                request.open("POST", 'films.php', true);
                request.responseType = 'json';
                
                request.onreadystatechange = function() {
                    if(request.readyState == 4 && request.status == 200) {
                        resolve(request.response);
                    }
                };
                request.send(); 
            });
            this.answer = await promise.then(data =>{
                let plantilla = "";
                data.data.allFilms.films.forEach(film => {
                    plantilla += `<li>${film.title}</li>`;
                });
                return `
                The <b>force</b> is in this movies:
                <ul>
                    ${plantilla}
                </ul>`;
            });
                  
        }else{
            const promise = new Promise(function (resolve, reject){
                request.responseType = 'json';
                request.open("POST", 'serve.php', true);
                
                request.onreadystatechange = function() {
                    if(request.readyState == 4 && request.status == 200) {
                        resolve(request.responseText);
                    }
                };
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(`question=${question}`); 
            });
            this.answer = await promise;
        }

        
    }

}