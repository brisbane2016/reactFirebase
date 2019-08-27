import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
class OptionModal extends React.Component{
 
    render(){
       
        return (

                    <div>

                    <Modal
                        isOpen={!!this.props.selectOption}
                        
                        onRequestClose={this.props.ModalClose}
                 
                        contentLabel="Example Modal"
                    >
                       
                        {
                            this.props.selectOption? (
                                <p>{this.props.selectOption.name}</p>

                            ):(

                                <p>none</p>
                            )


                        }
                        

                </Modal>

                    </div>



        );
    }
}


export default OptionModal;