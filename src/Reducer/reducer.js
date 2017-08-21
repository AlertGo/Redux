import { combineReducers } from 'redux'
let apple_heap = {
    num:0,  //当前苹果序列
    lessnum:0, //吃了多少个
    lessweight:0, //吃了多少克
    appleindex:0,
    appleweight: 0
}
//增与删
const AddorLess = (state=[],action) => {
    switch(action.type){
        case 'ADD_APPLE':
            //创建随机重量
            let Random_W = Math.floor(Math.random()*300+100) ;
            //创建随机颜色
            let Random_C = ["红","蓝","绿","橙"] ;
            let Random_S = ["red","blue","green","orange"] ;
            let Random_C_num = Math.floor(Math.random() * Random_C.length) ;
            let color = Random_C[Random_C_num] ;
            let styles = Random_S[Random_C_num] ;
            //苹果编号
            let id = apple_heap.num+1;
            apple_heap.num = id ;
            apple_heap.appleindex = state.length+1 ;
            apple_heap.appleweight = apple_heap.appleweight+Random_W ;
            //新对象整合
            let newstate = {
                  weight:Random_W,
                  id,
                  color,
                  styles
                }
            return [...state,newstate] ;
        case 'LESS_APPLE':
            return state.filter((v,i)=>{
                return v['id']!==action.id
            });
        default :
            return state
    }
}
//统计
const Statistics = (state = apple_heap,action) => {
    switch (action.type){
        case 'ADD_APPLE' :
            return Object.assign({},state,{...apple_heap});
        case 'LESS_APPLE':
            let lessnum = apple_heap.lessnum+1 ; //吃掉果子数
            let lessweight = apple_heap.lessweight + action.uid ; //果子重量
            let appleweight = apple_heap.appleweight - action.uid ;
            let appleindex = apple_heap.appleindex - 1
            apple_heap = {...apple_heap,lessnum,lessweight,appleindex,appleweight}
            return Object.assign({},state,{...apple_heap});
        default :
            return state;
    }
}


let reducers={
        AddorLess,
        Statistics
}

//合并reducers
export default combineReducers(reducers);
