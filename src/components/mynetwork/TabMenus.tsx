import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { CardContainerProps } from './CardContainer'

export default function TabMenus({ Menus }: CardContainerProps): JSX.Element {
  const [value, setValue] = useState('팔로우')
  const navigate = useNavigate()
  // const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  useEffect(() => {
    let currentMenu = ''
    value === '팔로우' ? (currentMenu = 'follow') : (currentMenu = 'follower')
    navigate(`?currentmenu=${currentMenu}`)
    console.log(searchParams.get('currentmenu'))
  }, [value])
  return (
    <Box sx={{ width: '100%', marginBottom: '2rem' }}>
      <Tabs centered value={value} onChange={handleChange} aria-label="wrapped label tabs example">
        {Menus?.map((item, idx) => (
          <Tab label={item} value={item} key={idx} />
        ))}
      </Tabs>
    </Box>
  )
}
