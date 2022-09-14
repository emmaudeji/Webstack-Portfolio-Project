export const getPropertyStart = () => ({
    type: "GET_PROPERTIES_START",
  });
  
  export const getPropertiesSuccess = (movies) => ({
    type: "GET_PROPERTIES_SUCCESS",
    payload: property,
  });
  
  export const getPropertiesFailure = () => ({
    type: "GET_PROPERTIES_FAILURE",
  });
  
  export const createPropertyStart = () => ({
    type: "CREATE_PROPERTY_START",
  });
  
  export const createPropertySuccess = (movie) => ({
    type: "CREATE_PROPERTY_SUCCESS",
    payload: property,
  });
  
  export const createPropertyFailure = () => ({
    type: "CREATE_PROPERTY_FAILURE",
  });
  
  export const updatePropertyStart = () => ({
    type: "UPDATE_PROPERTY_START",
  });
  
  export const updatePropertySuccess = (movie) => ({
    type: "UPDATE_PROPERTY_SUCCESS",
    payload: property,
  });
  
  export const updatePropertyFailure = () => ({
    type: "UPDATE_PROPERTY_FAILURE",
  });
  
  export const deletePropertyStart = () => ({
    type: "DELETE_PROPERTY_START",
  });
  
  export const deletePropertySuccess = (id) => ({
    type: "DELETE_PROPERTY_SUCCESS",
    payload: id,
  });

  export const deletePropertyFailure = () => ({
    type: "DELETE_PROPERTY_FAILURE",
  });