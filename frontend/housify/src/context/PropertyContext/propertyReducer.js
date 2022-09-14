const PropertyReducer = (state, action) => {
    switch (action.type) {
      case "GET_PROPERTIES_START":
        return {
          properties: [],
          isFetching: true,
          error: false,
        };
      case "GET_PROPERTIES_SUCCESS":
        return {
          properties: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_PROPERTY_FAILURE":
        return {
          movies: [],
          isFetching: false,
          error: true,
        };
      case "CREATE_PROPERTY_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_PROPERTY_SUCCESS":
        return {
          properties: [...state.properties, action.payload],
          isFetching: false,
          error: false,
        };
      case "CREATE_PROPERTY_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "UPLOAD_PROPERTY_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPLOAD_PROPERTY_SUCCESS":
        return {
          properties: state.properties.map(
            (property) => movie._id === action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
        };
      case "UPLOAD_PROPERTY_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "DELETE_PROPERTY_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_PROPERTY_SUCCESS":
        return {
          property: state.property.filter((property) => property.id !== action.payload),
          isFetching: false,
          error: false,
        };
      case "DELETE_PROPERTY_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default PropertyReducer;