import React from 'react'
import { BrowserRouter} from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoPage from './pages/TodoPage'
import {Header} from './components/Header'

function App() {
  return (
	<BrowserRouter>
		<GlobalStyle/>
		<Header/>
		<Routes>
			<Route exact path="/" element={<HomePage/>} />
			<Route  path="/to-do" element={<TodoPage />} />
		</Routes>
    </BrowserRouter>
  )
}

export default App