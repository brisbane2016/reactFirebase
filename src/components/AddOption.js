import React from 'react';


class AddOption extends React.Component {
 
    handleAddOption = (e) => {
        e.preventDefault();
   
        const option = e.target.elements.fname.value.trim();
        if (option !== "" ) {

            this.props.handleAddOption(option);
           
        }
    };

    render() {
      
        return (

            <div>

                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='fname' />

                    <button className="button" >Add Option</button>

                </form>

            </div>
        );
    }
}



export default AddOption;