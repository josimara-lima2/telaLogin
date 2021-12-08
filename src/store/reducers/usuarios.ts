import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface UserState {
    nome:string;
    senha:string;
    email:string;
    islogged:boolean;
}

interface UserListState{
    usuarios: UserState[]
}
const initialState = {
    usuarios: [{
        nome:'josy',
        senha:'123',
        email:'josy@gmail',
        islogged:false
    },
    {
        nome:'josimara',
        senha:'1234',
        email:'josimara@gmail',
        islogged:false
    }
]
} as UserListState

const listSlice = createSlice({
    name:'usuarios',
    initialState,
    reducers:{
        login(state, action: PayloadAction<{nome:string,senha:string,logado:boolean}>){
           state.usuarios.map((item,index) =>{
               if(action.payload.nome === item.nome && action.payload.senha === item.senha){
                   state.usuarios[index].islogged = action.payload.logado
                  
               }
           })
        },

        addUser(state,action:PayloadAction<UserState>){
            state.usuarios.push(action.payload)
        },
        logoutUser(state,action:PayloadAction<number>){
            state.usuarios[action.payload].islogged = false
        }
    }
})

export const {login,addUser,logoutUser} = listSlice.actions
export const listSelector = (state:RootState) => state.usuarios
export default listSlice.reducer