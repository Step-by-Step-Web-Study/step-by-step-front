import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FC, useState } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
})
interface Test {
  like: boolean
  currentColor: string
}

export default function useHandleLike(): Test {
  // export default function useHandleLike(): FC {
  const [like, setLike] = useState(false)
  const handleLike = (): void => setLike(!like)
  const [currentColor, setCurrentColor] = useState('inherit')

  return { like, currentColor }
}

// export default function useAxios({ method, url, config }: AxiosProps) {
//   // console.log('method', method)
//   // console.log('url',url);
//   // console.log('config',config);
//   const [response, setResponse] = useState(null)
//   const [error, setError] = useState('')
//   const [loading, setloading] = useState(true)
//   const fetchData = () => {
//     axios[method](url, config)
//       .then(res => {
//         setResponse(res.data)
//       })
//       .catch(err => {
//         setError(err)
//       })
//       .finally(() => {
//         setloading(false)
//       })
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])

//   return { response, error, loading, setResponse }
// }
