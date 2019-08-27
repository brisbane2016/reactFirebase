import React from 'react';

const Action = (props) => (

    <div>
        
        <button 
            onClick={props.handleWhatIdo}
            disabled={props.options.length <= 0}
            > 
        
        
        what should I do  </button>
        <button onClick= {props.handleRemoveAll}> Remove All  </button>
    </div>

);

export default Action;