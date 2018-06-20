import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from "../redux/actions/getData";

class Home extends Component {
    constructor(props) {
        console.log('props ss', props)
        super(props);
        this.state = {
            count: 0
        }
    }
    handerClick() {
        this.setState({
            count: ++this.state.count
        })
    }
    getData() {
        console.log('Home component props',this.props)
        console.log('homeInfo', this.props.homeInfo)
    }
    render() {
        return (
            <div>
                this is home~s<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this.handerClick()}>自增</button>
                <button onClick={() => this.props.getUserInfo().then()}>获取数据</button>
            </div>
        )
    }
}

export default connect((state) => ({homeInfo: state }), { getUserInfo})(Home)
// export default Home;