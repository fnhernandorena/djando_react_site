import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TaskPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import Navigation from './components/Navigation'

export default function App(){
  return(<div className='flex justify-center'><div className='w-full max-w-screen-lg'>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Navigate to='/tasks'/>}/>
      <Route path='/tasks' element={<TaskPage/>}/>
      <Route path='/create-task' element={<TaskFormPage/>}/>
      <Route path='/tasks/:id' element={<TaskFormPage/>}/>
    </Routes>
    </BrowserRouter></div></div>
  )
}