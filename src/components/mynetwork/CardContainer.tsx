import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import PersonCard from './PersonCard'
import TabMenus from './TabMenus'

export interface CardContainerProps {
  sectionTitle?: string
  Menus?: string[]
}

export default function CardContainer({ sectionTitle, Menus }: CardContainerProps): React.ReactElement {
  return (
    <Box sx={{ marginBottom: '3rem' }}>
      {Menus ? (
        <TabMenus Menus={Menus} />
      ) : (
        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>{sectionTitle}</h3>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, md: 12 }}>
        {Array.from(Array(10)).map((_, index) => (
          <PersonCard key={index} />
        ))}
      </Grid>
    </Box>
  )
}
