const addapple = () => {
    return {
        type:'ADD_APPLE'
    }

}
const lessapple = (x,i) => {

    return {
        type:'LESS_APPLE',
        id:x,
        uid:i
    }
}
const aaaa = () =>{
    return {
        type:'LESS_EAT'
    }
}
export { addapple , lessapple }
