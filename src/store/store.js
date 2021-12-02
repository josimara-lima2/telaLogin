import {createStore} from 'redux'

const reducer = (state,action) =>{
    switch(action.type){
        case '':
            return ''
        default:
            return{
                user: 'josy',
                password:'123'
            }
    }
}

const store = createStore(reducer)

export default store