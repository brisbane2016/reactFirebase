import React from 'react';
import SingleOption from "../components/SingleOption";

class Options extends React.Component{


    render(){
        return (

            <div> 
                {
                    this.props.options.length >= 0 &&
                    this.props.options.map((option,index) => (
                        <SingleOption 
                            key={option.referenceId} 
                            handleSingleRemove={this.props.handleSingleRemove}
                            handleSingleUpdate={this.props.handleSingleUpdate}
                            option={option} 
                            index={option.referenceId}
                        />
                        )
                    )
                }
            </div>
        );

    }
}


export default Options;