import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/authAction';

export const LoginPage = ({startLogin}) =>(
    
    <div className="loginbox">
        <div className="box">
        <h1>React test</h1>
        <p>click below and get login</p>
        <button onClick={startLogin} className="button">Login</button>

        </div>
        

    </div>
);

const mapDispatchToProps = (dispatch) =>({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);