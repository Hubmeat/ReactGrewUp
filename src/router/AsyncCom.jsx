import React, { Component } from 'react';
import style from './LoadingCom.less';

export default function Asyncfn (importComponent) {
    class AsyncCom extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            })
        }

        render() {
            const DelCom = this.state.component;
            const Loading = () => ( 
                <div>
                    <div className="hero-header-item hero-logo">
                        <div className="hero-logo-circles">
                            <img className="hero-logo-circle" src="../src/assets/img/1.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/2.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/3.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/4.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/5.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/6.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/7.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/8.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/9.png" />
                            <img className="hero-logo-circle" src="../src/assets/img/10.png" />
                        </div>
                    </div>
                </div>
            );

            return DelCom ? <DelCom {...this.props } />: <Loading />
        }
    }

    return AsyncCom;
}