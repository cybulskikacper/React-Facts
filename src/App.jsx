import { useState } from 'react'

import Nav from './components/Navbar'
import Main from './components/Main'

import './App.css'

function App() {
	const [darkMode, setDarkMode] = useState(false)

	function toggleDarkMode() {
		setDarkMode(prevmode => !prevmode)
	}

	return (
		<div className="container">
			<>
				<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<Main darkMode={darkMode} />
			</>
		</div>
	)
}

export default App
