import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// import { JobItemType } from '../../store/jobSlice'
import { objectToQuerystring } from '../../util/common'
import instance from '../../util/http'
import JobItem from './JobItem'

export interface JobItemType {
  companyName: string
  content: string
  contract: string
  educationalBackground: string
  intake: string
  no: string
  recruitmentProcess: string
  salary: string
  title: string
  workingConditions: string
  likeFlag: number
  regDate: number
  endDate: number
}

export default function JobList(): React.ReactElement {
  const [jobList, setJobList] = useState<JobItemType[]>([])
  const [curPage, setCurpage] = useState(0)
  const [moreItem, setMoreItem] = useState(true)
  const maxPage = 20

  const getJobList = async (): Promise<void> => {
    const params = objectToQuerystring({ curPage, maxPage })
    const response = await instance.get(`/api/company?${params}`)
    if (response.status === 200) {
      const filteredItem = response.data.filter((item: JobItemType) => Object.keys(item).includes('no'))
      setJobList([...jobList, ...filteredItem])
      setCurpage(curPage + maxPage)
      // if (curPage === 100) {
      //   setMoreItem(false)
      // }
    }
  }
  useEffect(() => {
    getJobList()
  }, [])

  return (
    <TableContainer sx={{ width: '100%', marginLeft: '2rem', marginTop: '2rem' }}>
      <InfiniteScroll
        dataLength={jobList.length}
        hasMore={moreItem}
        style={{ overflowY: 'hidden', width: '100%', height: '100%' }}
        scrollThreshold={'200px'}
        next={getJobList}
        loader={
          <Box sx={{ textAlign: 'center', margin: '1rem 0' }}>
            <CircularProgress id="circle" size={'100px'} />
          </Box>
        }
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={6} sx={{ fontSize: '1.5rem', fontWeight: 'bold', height: '4rem' }}>
                기업공고
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: '#1976d221' }}>
              <TableCell align="left">기업명</TableCell>
              <TableCell align="left">공고기간</TableCell>
              <TableCell align="center" colSpan={4}>
                공고제목
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: '100%' }}>
            {jobList && jobList.map((item, idx) => <JobItem key={idx} propsItem={item} />)}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </TableContainer>
  )
}
