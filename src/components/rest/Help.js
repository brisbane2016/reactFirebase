import React from 'react';
import Header from '../../components/Header';
import { history } from '../../routers/AppRouter';
class Help extends React.Component{
    
    handleHomepage =()=>{
        history.push('/');

    }
    render(){

        return (

            <div>
                <Header />

                <p>help:{this.props.match.params.id} </p>
    
                <button onClick={this.handleHomepage}>Back to home</button>
            </div>
    
          
        );
    }

       

}

export default Help;