const initialState = {
    selectedMedia: [],
};
  
export default function(state = initialState, action) {
    switch (action.type) {
      case "ADD_MEDIA":
        return {
          ...state,
          selectedMedia:[...state.selectedMedia,action.payload]
        };
        case "REMOVE_MEDIA":
        return {
          ...state,
          selectedMedia:state.selectedMedia.filter(i => i !== action.payload)
        };
        case "REMOVE_ALL_MEDIA":
        return {
          ...state,
          selectedMedia:[]
        }
      default:
        return state;
    }
}
  