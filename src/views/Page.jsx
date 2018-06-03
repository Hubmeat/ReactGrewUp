import React, {Component} from 'react';
import { connect } from 'react-redux';
import {increment, decrement, reset} from '../redux/actions/counter';
import store from '../redux/store';


class Page extends Component {
    loadData () {
        console.log('111')
        console.log(store.getState())
    }
    listener1() {
        store.subscribe( res => {
            console.log('res', res)
        })
    }
    render() {
        console.log('WTF this.props', this.props)
        console.log('store', store)
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={() => this.props.a()}>自增
                </button>
                <button onClick={() => this.props.b()}>自减
                </button>
                <button onClick={() => this.props.c()}>重置
                </button>
                <button onClick={() => this.loadData()}>getStore
                </button>
            </div>
        )
    }
}

const storeState = (state) => {
    console.log('getsTata', state)
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch', dispatch)
    return {
        a: () => {
            dispatch(increment())
        },
        b: () => {
            dispatch(decrement())
        },
        c: () => {
            dispatch(reset())
        }
    }
};


export default connect(storeState, mapDispatchToProps)(Page);
// export default Page;