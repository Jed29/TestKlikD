const initialState = {
    fetchData:[],
    loading:false,
    error:null    
}

export default function DataReducer(state = initialState, action){
    const {type,payload} = action

    if(type === 'SETDATA'){
        return {...state, fetchData:payload}
    }else if(type === 'SETLOADING'){
        return { ...state, loading:payload}
    }else if( type === 'SETERROR'){
        return {...state,error:payload}
    }
    return state
}