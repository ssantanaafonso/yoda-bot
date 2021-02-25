import axios from 'axios';

export default class Question{

    constructor(query){
        this.query = query; 
          
    }

    async getAnswer(){
        //Analyze query

        //API Call
        // try{
        //     const answer = await axios(`url${this.query}`);
        //     this.result = answer.data;
        // }catch(e){
        //     alert(e);
        // }
        this.answer =  'Hey it\'s me Mario';

    }

}