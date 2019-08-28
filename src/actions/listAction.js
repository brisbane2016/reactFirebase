import database from '../firebase';
import uuid from 'uuid';
export const setListAction = (list) => ({

    type: 'SET_LIST',
    list

})

export const startSetListAction = () => {


    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;
        // update firebase database and check auth ID when use options table
        return database.ref(`options/${uid}`).once('value').then((snapshot) => {
            const list = [];
            snapshot.forEach((childSnapshot) => {
                list.push({
                    referenceId: uid,
                    ...childSnapshot.val()
                });
            });
           // console.log(list);
            dispatch(setListAction(list));
        });
      
    }
}

export const addListAction = (option) => ({

    type: 'ADD_LIST',
    option

})

export const startAddListAction = (option) => {

   
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;
        const listOption = { id: uuid.v4(), name: option };
        

        return database.ref(`options/${uid}`).push(listOption).then(

            (ref) => {
                dispatch(addListAction({referenceId:ref.key,...listOption}));

            }

        );

    }
}

export const removeListAction = (referenceId) => ({

    type: 'REMOVE_LIST',
    referenceId

})


export const startRemoveListAction = (referenceId) => {

    return (dispatch, getState) => {

        const uid = getState().authReducer.uid;
      console.log(referenceId);
     //   const listOption = getState.options.find(x=>x.id === id);

        return database.ref(`options/${uid}/${referenceId}`).remove().then(

            (ref) => {
                dispatch(removeListAction(referenceId));

            }

        );

    }
}


export const editListAction = (referenceId,option) => ({

    type: 'EDIT_LIST',
    referenceId,
    option

})


   
export const startEditListAction= (referenceId,option)=>{
   
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;
           return database.ref(`options/${uid}/${referenceId}`).update(option).then( (ref) => {


                   dispatch(editListAction(referenceId,option));
   
               }
   
           );
    }
   
}

