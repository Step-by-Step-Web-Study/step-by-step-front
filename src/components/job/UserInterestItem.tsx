import StarIcon from '@mui/icons-material/Star'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { JobItemType } from './DummyList'

interface JobInterestItemProps {
  item: JobItemType
}

export default function UserInterestItem({ item }: JobInterestItemProps): React.ReactElement {
  const { conm, regymd, ddlnymd, dutycn } = item

  const [like, setLike] = useState(false)
  const handleLike = (): void => setLike(!like)

  return (
    <>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={conm}
          secondary={
            <>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                <span>{regymd}</span>-<span>{ddlnymd}</span>
              </Typography>
              <br />
              {dutycn}
            </>
          }
        />
        <IconButton aria-label="add to favorites" onClick={handleLike} color={like ? 'inherit' : 'primary'}>
          <StarIcon sx={{ fontSize: 35 }} />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}
