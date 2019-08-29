import React from 'react';

import { history } from '../../routers/AppRouter';
class Help extends React.Component{
    
    handleHomepage =()=>{
        history.push('/');

    }
    render(){

        return (

            <div>
           

                <p>help:{this.props.match.params.id} </p>
    
                <button onClick={this.handleHomepage}>Back to home</button>
            </div>
    
          
        );
    }

       

}

export default Help;