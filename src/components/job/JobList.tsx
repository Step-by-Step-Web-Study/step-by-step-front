import { TextField } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { JobItemType } from '../../store/jobSlice'
import JobItem from './JobItem'

// const JobList: React.FC = () => {
export default function JobList(): React.ReactElement {
  const [inputVal, setInputVal] = useState('')
  const searchList = (): void => {
    console.log(inputVal)
  }
  const [loading, setLoading] = useState(true)
  const jobs = useSelector((state: RootState) => state.job.jobList)
  const [jobList, setJobList] = useState<JobItemType[] | null>([])
  useEffect(() => {
    setJobList(jobs)
    setLoading(false)
  }, [])

  return (
    <TableContainer sx={{ width: '100%', marginLeft: '2rem', marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>채용공고 검색</h3>
      <TextField
        fullWidth
        placeholder="검색어를 입력하세요."
        id="search"
        onChange={(e): void => setInputVal(e.target.value)}
        style={{ margin: '2rem 0 1rem 1rem' }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={searchList}>
              <SearchIcon style={{ fontSize: '35px' }} />
            </IconButton>
          ),
        }}
      />
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
        {loading ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                <CircularProgress size={'10rem'} />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {jobList?.map(item => (
              <JobItem key={item.no} propsItem={item} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  )
}
