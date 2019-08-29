import React from 'react';
import Action from '../components/Action';

import Options from '../components/Options';
import AddOption from '../components/AddOption';
import OptionModal from '../components/OptionModal';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';
import { startAddListAction, startRemoveListAction, startEditListAction } from '../actions/listAction';
import configureStore from '../store';

const xstore = configureStore();

class ReactForm extends React.Component {

    state = {
        options: [],
        selectOption: undefined
    }

    handleAddOption = (option) => {



        if (option !== "") {


            this.props.startAddListAction(option);

        }
    };
    handleSingleRemove = (referenceId) => {
        if (referenceId !== "") {


            this.props.startRemoveListAction(referenceId);


        }

    }
    handleSingleUpdate = (referenceId, option) => {
        if (referenceId !== "") {


            this.props.startEditListAction(referenceId, option);


        }

    }

    handleRemoveAll = () => {
        this.props.list.map((option) => {
            return this.props.startRemoveListAction(option.referenceId);
        });
       
    }

    handleWhatIdo = () => {
  
  
        const number = Math.floor(Math.random() * Math.floor(this.props.list.length));

        const selectOption =this.props.list[number];
        this.setState(() => ({
            selectOption
        }));
   
    }
    handleModalClose = () => {

        this.setState(() => ({
            selectOption: undefined
        }));
    }
 
    simpleAction = (event) => {
        this.props.simpleAction();
        console.log(xstore.getState());

    }



    render() {
        console.log(this.state.selectOption);

        return (
            <div className="container">


                <div className="fix-container">

                <Action
                    handleRemoveAll={this.handleRemoveAll}
                    handleWhatIdo={this.handleWhatIdo}
                    options={this.props.list}
                />
                <Options

                    options={this.props.list}
                    handleSingleRemove={this.handleSingleRemove}
                    handleSingleUpdate={this.handleSingleUpdate}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}

                />

                <OptionModal

                    selectOption={this.state.selectOption}
               
                    ModalClose={this.handleModalClose}

                />

                <button onClick={this.simpleAction}>Test redux action</button>

                </div>
            
               
                <pre>
                    {
                        JSON.stringify(this.props)
                    }
                </pre>

            </div>


        );


    }
}


// take state to this page
const mapStateToProps = state => ({
    list: state.listReducer
})

// create local props function which can execute and dispatch redux action
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    startEditListAction: (referenceId, option) => dispatch(startEditListAction(referenceId, option)),
    startAddListAction: (list) => dispatch(startAddListAction(list)),
    startRemoveListAction: (id) => dispatch(startRemoveListAction(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReactForm);