import React from 'react'
import styles from './Search.module.scss'

type Props = {

searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const Search: React.FC<Props> = (props) => {

  const { searchOnChange } = props


  return (

    <div className={styles.container}>

      <input
       autoComplete='off'
       aria-label='type here'
       tabIndex={1}
       type='text'
       name='seach input'
       placeholder='SEARCH'
       onChange={searchOnChange}
       />
      
    </div>
  )
}

export default Search