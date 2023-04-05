import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import store from '../../store'
// import { useAppDispatch } from '../../store'
import CircularProgress from '@mui/material/CircularProgress'
import { actionGetJobList } from '../../store/jobSlice'
import { objectToQuerystring } from '../../util/common'
import instance from '../../util/http'
import SideToolbar from '../layout/SideToolbar'
import JobList from './JobList'

type AppDispatch = typeof store.dispatch

export const jobMenus = [
  { menuName: '채용공고', menuUrl: '/job' },
  { menuName: '찜한공고', menuUrl: '/job/userinterest' },
]

export default function JobPage(): JSX.Element {
  // const dispatch = useAppDispatch()
  const dispatch = useDispatch<AppDispatch>()

  const [curPage, setCurpage] = useState(0)
  // const [loading, setLoading] = useState(true)

  const maxPage = 20
  const getList = async () => {
    // await dispatch()
    const params = objectToQuerystring({ curPage, maxPage })
    await dispatch(actionGetJobList(params))
    // setLoading(false)
  }
  useEffect(() => {
    // const params = objectToQuerystring({ curPage, maxPage })
    // console.log(params)
    // console.log(dispatch())
    getList()

    // dispatch(actionGetJobList(params))
  }, [])
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar menus={jobMenus} />
      <JobList />
      {/* {!loading ? <JobList /> : <CircularProgress size={'10rem'} />} */}
    </Box>
  )
}

/* 
  const test = async (params: string) => {
    // const res = await instance.get('/api/comment/1')
    // const res = await instance.get('/api/follower/aaaaa@gmail.com')
    // const res = await instance.get('/api/company')
    // const res = await instance.get(`/api/follow/unFollowList/${params}`)
    // const res = await instance.get('/api/follow/unFollowList', params)
    // const res = await instance.get('/api/follow/unFollowList')
    console.log(localStorage.getItem('auth'))

    // const res = await instance.get('/api/company', {
    //   headers: {
    //     'Content-Type': `application/json`,
    //     Authorization: localStorage.getItem('auth'),
    //   },
    // })
    // const res = await instance.get('/api/company')
    // const res = await instance.get('/api/company?curPage=1&maxPage=20')
    // const res = await instance.get('/api/follow/unFollowList')
    const res = await instance.get('/api/follow/unFollow/aTest1@test.com')
    console.log(params)
    console.log(res)
    return res
  }

*/
