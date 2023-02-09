import React, { useMemo, useRef, useState, ChangeEvent } from 'react'
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'
import close from '../../assets/img/close.svg'
import { SearchContext } from '../../App'

const Search = () => {
  const [value, setValue] = useState('')
  const { setSearchValue } = React.useContext(SearchContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }

  const updateSearchValue = useMemo(
    () =>
      debounce((str: string) => {
        setSearchValue(str)
      }, 500),
    [setSearchValue],
  )
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="Поиск" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы"
      />
      {value && (
        <img onClick={onClickClear} className={styles.clearIcon} src={close} alt="Очистить" />
      )}
    </div>
  )
}

export default Search
