import { TextField } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useEffect, useState } from 'react'
import SideToolbar from '../layout/SideToolbar'
import JobList from './JobList'

export const jobMenus = [
  { menuName: '채용공고', menuUrl: '/job' },
  { menuName: '찜한공고', menuUrl: '/job/userinterest' },
]

export default function JobPage(): JSX.Element {
  const [inputVal, setInputVal] = useState('')
  const searchList = (): void => {
    console.log(inputVal)
  }
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar menus={jobMenus} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', marginLeft: '2rem', marginTop: '2rem' }}>
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
        </Box>
        <JobList />
      </Box>
    </Box>
  )
}
