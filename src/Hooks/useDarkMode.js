import  {  useEffect, useState } from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === true
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    const togleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return [togleDarkMode]
}

export default useDarkMode