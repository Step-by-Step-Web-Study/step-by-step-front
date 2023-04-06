import Box from '@mui/material/Box'
import SideToolbar from '../layout/SideToolbar'
import CardContainer from './CardContainer'

export const myNetworkMenus = [
  { menuName: '추천인맥', menuUrl: '/mynetwork' },
  { menuName: '나의인맥', menuUrl: '/mynetwork/connection' },
]
export default function MyNetworkPage(): React.ReactElement {
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar menus={myNetworkMenus} />
      <Box sx={{ flexGrow: 1, marginLeft: '2rem', marginTop: '2rem' }}>
        <CardContainer sectionTitle={'알 수도 있는 사람'} />
        <CardContainer sectionTitle={'같은 직군을 희망하는 사람'} />
      </Box>
    </Box>
  )
}
