import React from "react"
import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'
import { Dispatch, SetStateAction } from 'react'
import close from '../../assets/img/close.svg'
import { SearchContext } from "../../App"

type SearchProps = {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>> | any
}

const Search = () => {

  const { searchValue, setSearchValue } = React.useContext(SearchContext)

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="Поиск" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы"
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          src={close}
          alt="Очистить"
        />
      )}
    </div>
  )
}

export default Search
