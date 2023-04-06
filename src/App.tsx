import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Bulletin from './components/bulletin/Bulletin'
import JobPage from './components/job/JobPage'
import UserInterestPage from './components/job/UserInterestPage'
import Header from './components/layout/Header'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import Test from './components/test/Test'
import MyNetworkPage from './components/mynetwork/MyNetworkPage'
import ConnectionPage from './components/mynetwork/ConnectionPage'

const App: React.FC = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Bulletin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job/userinterest" element={<UserInterestPage />} />
          <Route path="/mynetwork" element={<MyNetworkPage />} />
          <Route path="/mynetwork/connection" element={<ConnectionPage />} />
        </Routes>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
