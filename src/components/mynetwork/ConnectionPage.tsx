import Box from '@mui/material/Box'
import SideToolbar from '../layout/SideToolbar'
import CardContainer from './CardContainer'
import { myNetworkMenus } from './MyNetworkPage'

export default function ConnectionPage(): React.ReactElement {
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar menus={myNetworkMenus} />
      <Box sx={{ flexGrow: 1, marginLeft: '2rem', marginTop: '2rem' }}>
        {/* <CardContainer sectionTitle={'팔로우'} /> */}
        <h3 style={{ fontSize: '1.5rem' }}>나의 인맥</h3>
        <CardContainer Menus={['팔로우', '팔로워']} />
      </Box>
    </Box>
  )
}
