import React, {Component} from 'react'

class Bundle extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    
    // 组件将被卸载  
    componentWillUnmount(){ 
    //重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return;
        };  
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
        // props.load().then((mod) => {
        //     this.setState({
        //         // handle both es imports and cjs
        //         mod: mod.default ? mod.default : mod
        //     })
        // })
    }

    render() {
        return this.props.children(this.state.mod)
    }
}

export default Bundle;