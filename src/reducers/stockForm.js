const initialState = {
  name: "",
  symbol: "",
  industry: "",
  sector: "",
}

const stockFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STOCK_FORM":
      return action.formData
    case "CLEAR_STOCK_FORM":
      return initialState
    default:
      return state
  }
}

export default stockFormReducer
