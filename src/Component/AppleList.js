import React from 'react'
import { connect } from 'react-redux'
import { addapple , lessapple } from '../Action/action'
//列表页
class AppleList extends React.Component{
    DeleteApple (x,i){
        return () => {
            this.props.lessapple(x,i)
        }
    }
    render (){
        return (
            <div className="applist_cont">
                <ul className="applist_ul">
                    {this.props.data.length>0 && this.props.data.map((v,i) => {
                        return (
                            <li key={i}>
                                <p>
                                    <span>苹果－{v['id']}号--
                                        <span style={{color:v['styles']}}>({v['color']}色)</span>
                                    </span><br/>
                                    <span>{v['weight']}克</span>
                                </p>
                                <button onClick={this.DeleteApple(v['id'],v['weight'])}>删除</button>
                            </li>
                          )
                    })}
                </ul>
                <button onClick={this.props.addapple} >添加</button>
            </div>
        )
    }
}
let datas=(data) => {
    return {
        data:data.AddorLess
    }
}
export default connect(datas,{ addapple , lessapple })(AppleList)
