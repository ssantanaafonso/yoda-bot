import Question from './models/Question';
import * as questionView from './views/questionView';

/** Global state of the app
 * - Question object
 */
const state = {};

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    questionController();
});

const questionController = async () => {

    //Read msg from UI
    const question = questionView.getQuestion();

    if ( question ){

        //Prepare UI for receiving the msg

        questionView.clearInput();

        questionView.addMsg('Me', question);

        //Attach msg to localStorage

        //Start writting text...

        //localStorage.setItem('chat', question);

        //Create a new question Object
        state.msg = new Question(question);
        
        try{
            // 4) Process msg
            await state.msg.getAnswer();
            

            // 5) Render results

            questionView.addMsg('YodaBot', state.msg.answer);
    
         }catch(e){
            alert('Something went wrong...');
         }

         //Stop writting text...
         //clearWriting();
    }
};
