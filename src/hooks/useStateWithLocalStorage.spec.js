import { renderHook, act } from '@testing-library/react-hooks'

import useStateWithLocalStorage from './useStateWithLocalStorage'
const TEST_KEY = 'key'
const TEST_VALUE = { test: 'test' }

describe('useStateWithLocalStorage', () => {
  it('should set localStorage with default value', () => {
    renderHook(() => useStateWithLocalStorage(TEST_VALUE, TEST_KEY))
    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(TEST_VALUE)
  })

  it('should update localStorage when state changes', () => {
    const { result } = renderHook(() =>
      useStateWithLocalStorage(TEST_VALUE, TEST_KEY)
    )

    const [, setValue] = result.current

    const newValue = { anotherValue: 'Some value' }
    act(() => {
      setValue(newValue)
    })

    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(newValue)
  })
})
