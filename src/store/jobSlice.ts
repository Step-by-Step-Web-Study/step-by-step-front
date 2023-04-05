import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import instance from '../util/http'

export const actionGetJobList = createAsyncThunk('/api/company', async (payload: string) => {
  console.log(payload)
  const response = await instance.get(`/api/company?${payload}`)
  console.log(response)
  return response.data
})
interface JobState {
  jobList?: object[]
}
export interface JobItemType {
  companyName: string | null
  content: string | null
  contract: string | null
  educationalBackground: string | null
  intake: string | null
  no: string | null
  recruitmentProcess: string | null
  salary: string | null
  title: string | null
  workingConditions: string | null
  likeFlag: number | null
  regDate: number | null
  endDate: number | null
}

const initialState = {
  jobList: [],
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(actionGetJobList.pending, (state: JobState, action) =>
        console.log('펜딩', current(state), action.payload),
      )
      .addCase(actionGetJobList.fulfilled, (state: JobState, action) => {
        console.log('풀필드', action.payload)
        const filteredItem = action.payload.filter((item: JobItemType) => Object.keys(item).includes('no'))
        state.jobList = filteredItem
      })
      .addCase(actionGetJobList.rejected, (state: JobState, action) => console.log('리젝트', current(state), action))
  },
})

export default jobSlice
// export const {  } = jobSlice.actions
