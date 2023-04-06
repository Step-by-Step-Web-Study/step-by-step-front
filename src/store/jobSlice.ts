import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../util/http'

export const actionPostLikeCompany = createAsyncThunk('postCompany', async (payload: string | null) => {
  console.log(payload)
  const params = {
    companyName: payload,
    likeUserId: 'aTest1@test.com',
  }
  // const response = await instance.post(`/api/company/${payload}`)
  // const response = await instance.post('/api/company/강남재가요양센터', params)
  const response = await instance.post(`/api/company`, params)
  // const response = await instance.post(`/api/company/${payload}`, params)
  // const response = await instance.get('/api/follow/unFollowList')
  console.log(response)
  return response.data
})
export const actionDeleteLikeCompany = createAsyncThunk('deleteCompany', async (payload: string | null) => {
  console.log(payload)
  const params = {
    companyName: payload,
    likeUserId: 'aTest1@test.com',
  }
  const response = await instance.delete(`/api/company/${payload}`, { data: params })
  console.log(response)
  return response.data
})

const initialState = {
  jobList: [],
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(actionPostLikeCompany.pending, (state, action) => console.log('펜딩', action.payload))
      .addCase(actionPostLikeCompany.fulfilled, (state, action) => {
        console.log('풀필드', action.payload)
      })
      .addCase(actionPostLikeCompany.rejected, (state, action) => console.log('리젝트', action))
  },
})

export default jobSlice
// export const {  } = jobSlice.actions
