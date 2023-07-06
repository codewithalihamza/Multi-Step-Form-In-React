const initialState = {
    formData: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload
          }
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;