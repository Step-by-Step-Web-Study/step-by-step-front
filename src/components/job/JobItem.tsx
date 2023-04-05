import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { JobItemType } from '../../store/jobSlice'

interface JobItemProps {
  propsItem: JobItemType
}

export default function JobItem({ propsItem }: JobItemProps): React.ReactElement {
  const {
    companyName,
    content,
    contract,
    educationalBackground,
    endDate,
    intake,
    likeFlag,
    no,
    recruitmentProcess,
    regDate,
    salary,
    title,
    workingConditions,
  }: JobItemType = propsItem

  const [open, setOpen] = useState(false)
  const [like, setLike] = useState(likeFlag === 0 ? false : true)
  const handleLike = (): void => setLike(!like)
  const handleToggle = (): void => setOpen(!open)

  const unixTimeHandle = (time: number | null) => {
    // const date = new Date(time * 1000)
    const date = time !== null ? new Date(time * 1000) : new Date()
    const year = date.getFullYear()
    const month = '0' + (date.getMonth() + 1)
    const day = '0' + date.getDate()
    return year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' '
  }

  return (
    <>
      <TableRow>
        <TableCell align="left">{companyName}</TableCell>
        <TableCell align="left">
          <span>{unixTimeHandle(regDate) + ' ~ '}</span>
          <br />
          <span>{unixTimeHandle(endDate)}</span>
        </TableCell>
        <TableCell align="left" colSpan={3}>
          {title}
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={handleToggle}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* 아코디언하단 */}
      <TableRow sx={{ backgroundColor: '#1976d221' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom component="div">
                  상세내용
                </Typography>
                <IconButton aria-label="delete" onClick={handleLike} color={!like ? 'inherit' : 'primary'}>
                  {/* <IconButton aria-label="delete" onClick={handleLike} color={likeFlag === 0 ? 'inherit' : 'primary'}> */}
                  <StarIcon sx={{ fontSize: 35 }} />
                </IconButton>
              </Box>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      자격요건
                    </TableCell>
                    <TableCell scope="row">{educationalBackground}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      고용형태
                    </TableCell>
                    <TableCell scope="row">{contract}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      채용전형
                    </TableCell>
                    {/* <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>근무지</TableCell> */}
                    <TableCell scope="row">{recruitmentProcess}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      모집인원
                    </TableCell>
                    <TableCell scope="row">{intake}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      임금조건
                    </TableCell>
                    <TableCell scope="row">{salary}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      직무내용
                    </TableCell>
                    <TableCell scope="row">{content}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      근무시간
                    </TableCell>
                    <TableCell scope="row">{workingConditions}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
