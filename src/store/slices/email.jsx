const INITIAL_STATE = {
    userss: [
        {
            name:'test11',
            email:'test1@email.com'
        }
    ],
    name:'',
    email:'',

    universities:[]
};

const emailReducer =(state=INITIAL_STATE,action)=> {
    const {type, payload} = action
 
    switch(type){
        case 'SET_EMAIL_STATE':
            return{
                ...state,
                ...payload
            }
        default:
            return state;
    }
};

export default emailReducer;