import { Box } from '@mui/material'
import { Sidebar } from '../common/Sidebar'
import { Outlet } from 'react-router-dom'

const sidebarWidth = 350;

export const MainLayout = () => {
  return (
    <Box display='flex'>
      <Sidebar sideBarWidth={sidebarWidth} />
      <Box component='main' sx={{
        flexGrow: 1,
        p: 3,
        height: '100vh',
        width: {
          sm: `calc(100% - ${sidebarWidth}px)`,
        },
      }}>
        <Outlet />
      </Box>
    </Box>
  )
}
