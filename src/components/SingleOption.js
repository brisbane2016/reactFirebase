import React from 'react';

class SingleOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            name: this.props.option.name

        };
    }
    handleOptionChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))

    }
    handleSingleUpdate = () => {

        const newoption = {
            referenceId:this.props.index,
            id:this.props.option.id,
            name:this.state.name
        };
        this.props.handleSingleUpdate(this.props.index, newoption);
    }

                  

       


    render() {
 
        return (
            <div>
                <p>Item Name: <input
                    type='text'
                    name='name'
                    //     ref={node => (this.inputNode = node)}
                    value={this.state.name}
                    onChange={this.handleOptionChange}
                />
                </p>
                <button
                    onClick={() => (


                        this.handleSingleUpdate()

                    )}>Update this Item</button>
                <button
                    onClick={() => (

                        this.props.handleSingleRemove(this.props.index)

                    )}>Remove</button>
            </div>


        );
    }
}

export default SingleOption;



