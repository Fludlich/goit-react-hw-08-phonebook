import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = ``
    }
}

export const register = createAsyncThunk(
    'auth/register', 
    async (credentials, {rejectWithValue}) =>{
    try {
        const {data}= await axios.post('/users/signup', credentials)
        token.set(data.token)
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk(
    'auth/login', 
    async (credentials, {rejectWithValue})=>{
    try {
        const {data}= await axios.post('/users/login', credentials)
        token.set(data.token)
        console.log(data)
        return data
    } catch (error) {
         return rejectWithValue(error.message);
    }
})

export const logout = createAsyncThunk(
    'auth/logout', 
    async (credentials, {rejectWithValue})=>{
    try {
        const {data}= await axios.post('/users/logout', credentials)
        token.unset()
        return data
    } catch (error) {
         return rejectWithValue(error.message);
    }
})

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async(_, thunkAPI)=>{
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token

        if(persistedToken===null){
            return thunkAPI.rejectWithValue()
        }
        token.set(persistedToken)
        try {
            const {data} = await axios.get('users/current')
            return data
        } catch (error) {
             thunkAPI.rejectWithValue(error.message)
        }
    }
)

