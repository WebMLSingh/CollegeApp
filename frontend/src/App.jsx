import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

import LoginUser from './pages/LoginUser';
import LoginAdmin from './pages/LoginAdmin';

import RegUser from './pages/RegUser';
import RegAdmin from './pages/RegAdmin';

import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';

import EditCycleData from './pages/EditCycleData'
import Update from './pages/Update'
function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/user' element={<UserPage />} />
        <Route path='/admin' element={<AdminPage />} />

        <Route path='/userLogin' element={<LoginUser />} />
        <Route path='/adminLogin' element={<LoginAdmin />} />

        <Route path='/userReg' element={<RegUser />} />
        <Route path='/adminReg' element={<RegAdmin />} />

        <Route path='/editCycleData' element={<EditCycleData />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </Box>
  )
}

export default App