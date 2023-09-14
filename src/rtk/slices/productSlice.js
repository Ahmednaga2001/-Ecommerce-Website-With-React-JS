import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("ProductSLice/fetchProducts" , async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    console.log(data)
    return data

})



export const ProductSLice = createSlice({
    name : "ProductSlice",
    initialState : [],
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled , (state,action)=>{
            return action.payload              // initialstate = [...........]
        })

    }
})

export const {} = ProductSLice.actions
export default ProductSLice.reducer