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
        await state.msg.getAnswer();
        try{
            // 4) Process msg
            
            

            // 5) Render results

            questionView.addMsg('YodaBot', state.msg.answer);
    
         }catch(e){
            alert('Something went wrong...');
         }

         //Stop writting text...
         //clearWriting();
         localStorage.setItem('chat', document.querySelector('.chat__list').innerHTML);
    }
};

const init = () => {
    questionView.initChat();
};
init();
