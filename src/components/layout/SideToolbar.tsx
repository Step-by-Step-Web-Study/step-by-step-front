import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PersonPinOutlined, PersonPinRounded } from '@material-ui/icons'

interface MenuProps {
  menus: Array<Menus>
}
interface Menus {
  menuName: string
  menuUrl: string
}

export default function SideToolbar({ menus }: MenuProps): JSX.Element {
  const navigate = useNavigate()
  return (
    <Box sx={{ minWidth: '20%', minHeight: '95vh' }}>
      {/* <Box sx={{ width: '20%', minWidth: '20%', minHeight: '95vh' }}> */}
      <Toolbar
        sx={{
          backgroundColor: '#1976d221',
          alignItems: 'flex-start',
          height: '100%',
          width: '80%',
          position: 'relative',
        }}
      >
        <List sx={{ width: '100%' }}>
          {menus.map((menu, index) => (
            <ListItem key={index} disablePadding sx={{ whiteSpace: 'nowrap' }}>
              <ListItemButton onClick={(): void => navigate(menu.menuUrl)}>
                <ListItemIcon>{index % 2 === 0 ? <PersonPinOutlined /> : <PersonPinRounded />}</ListItemIcon>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={menu.menuName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </Box>
  )
}
