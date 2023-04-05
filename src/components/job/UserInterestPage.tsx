import SideToolbar from '../layout/SideToolbar'
import { Box } from '@mui/material'
import UserInterestList from './UserInterestList'
import { jobMenus } from './JobPage'

export default function UserInterestPage(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar menus={jobMenus} />
      <UserInterestList />
    </Box>
  )
}
