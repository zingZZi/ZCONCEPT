import { configureStore, createSlice } from '@reduxjs/toolkit'
let category = createSlice({
    name :'selectCategory',
    initialState:['여성'],
    reducers:{
      gnbState(state,action){
        //console.log(action.payload)
        let depth = action.payload.parentcategory
        let depth2 = action.payload.name
        return(
          [depth,depth2]
        )
      }
    }
})




export let {gnbState} = category.actions;

export default configureStore({
  reducer: { 
    category: category.reducer,
  }
}) 