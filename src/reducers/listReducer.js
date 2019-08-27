export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return action.list

    case 'ADD_LIST':
      return [...state, action.option]
    case 'EDIT_LIST':
      return state.map((option) => {
      
        if (option.referenceId === action.referenceId) {
          const newoption = {
            referenceId: action.referenceId,
            ...action.option
          };
          return newoption;

        } else {
          return option;
        }


      });
    case 'REMOVE_LIST':
      return state.filter(option => option.referenceId !== action.referenceId);
    default:
      return state
  }
}