import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemedComponent = () => {
    const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
        <div className=' text-center'>
            <h1 className="text-2xl font-bold">{`Current theme is ${theme}`}</h1>
            <button className="mt-4 px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white transition duration-300" onClick={changeTheme}>
                Change Theme
            </button>
        </div>
    </div>
  )
}

export default ThemedComponent