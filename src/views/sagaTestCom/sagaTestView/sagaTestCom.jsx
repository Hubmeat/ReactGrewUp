import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sageTestStart } from '../sagaTest.action';
import style from './sagaTest.useable.less';
import { Button } from 'antd';

class SagaTest extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        style.use()
    }
    componentWillUnmount() {
        style.unuse()
    }
    render() {
        console.log('sagaCom props', this.props)
        console.log('sagaCom', this.props.sagaWay)
        return (
            <div>
                <button onClick={() => this.props.sageTestStart()}>TEST saga</button>
                <div>
                    What can I get?
                    {this.props.sagaWay.code}<br />
                    {this.props.sagaWay.data === undefined?'nothing':this.props.sagaWay.data}
                </div>
                <div className="box" >
                    <div className="inlineBox">ss</div>
                </div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}

// export default SagaTest;
export default connect((state) => ({sagaWay: state.sageTestReducer }), { sageTestStart })(SagaTest)