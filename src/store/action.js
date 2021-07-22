export function setData(payload){
    return {type:'SETDATA', payload}
}
export function setLoading(input){
    return {type:'SETLOADING', payload:input}
}
export function setError(input){
    return {type:'SETERROR', payload:input}
}

export function fetchData(payload){
    return (dispatch)=>{
        dispatch(setLoading(true))
        fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then(response=>response.json())
        .then(data=>{
            dispatch(setData(data.data))
            dispatch(setLoading(false))    
        })
        .catch(err=>dispatch(setError(err)))
    }
}