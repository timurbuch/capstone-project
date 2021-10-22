import { useState, useEffect } from 'react'
import saveToLocal from '../lib/saveToLocal'

const useStateWithLocalStorage = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem('storedPlayers') === null) {
      return defaultValue
    } else {
      return JSON.parse(localStorage.getItem(key))
    }
  })
  useEffect(() => {
    saveToLocal(key, value)
  }, [key, value])

  return [value, setValue]
}

export default useStateWithLocalStorage
