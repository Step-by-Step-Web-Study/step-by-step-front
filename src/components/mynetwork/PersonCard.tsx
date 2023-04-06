import FavoriteIcon from '@mui/icons-material/Favorite'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/styles'
import { useState } from 'react'
import classes from './PersonCard.module.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
})

export default function PersonCard(): React.ReactElement {
  const [like, setLike] = useState(false)
  const handleLike = (): void => setLike(!like)
  // const {casdasd,asdasd} = UseHandleLike()

  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer', margin: '1rem' }}>
      <CardHeader
        sx={{ flexDirection: 'column', textAlign: 'center' }}
        avatar={
          <Avatar
            sx={{ width: 150, height: 150, margin: '0 0 .5rem 16px' }}
            // sx={{ width: 150, height: 150, marginBottom: '.5rem', marginLeft: '16px' }}
            aria-label="recipe"
            // src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
            src="https://cdn.crowdpic.net/list-thumb/thumb_l_D623AE308211C3678E61EC0E3FF3C969.jpg"
          ></Avatar>
        }
        title="라이언"
        subheader="카카오 개발자"
      />
      <CardActions disableSpacing>
        <ThemeProvider theme={theme}>
          <IconButton
            onClick={handleLike}
            color={like ? 'primary' : 'inherit'}
            sx={{ margin: '0 auto' }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
        </ThemeProvider>
      </CardActions>
    </Card>
  )
}
