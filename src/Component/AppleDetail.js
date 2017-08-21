import React from 'react'
import { connect } from 'react-redux'
//苹果信息页
class Apples extends React.Component{
    render (){
        return (
            <div className="apple_header">
                <h1>摘果子</h1>
                <div className="apple_nums">
                    <div>
                        <p>当前</p>
                        <p className="p2">{this.props.data['appleindex']}个苹果 ，{this.props.data['appleweight']}克</p>
                    </div>
                    <div>
                        <p>以吃掉</p>
                        <p className="p2">{this.props.data['lessnum']}个苹果 ，{this.props.data['lessweight']}克</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect((data) => {
    return {
        data:data.Statistics
    }
})(Apples)
