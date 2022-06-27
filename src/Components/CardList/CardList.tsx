import React, { ReactNode } from 'react'
import styles from './CardList.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import { IMovieInfoType } from '../../types/app.types'

type Props = {

 movieList: Partial<IMovieInfoType>[] 

}

const CardList: React.FC<Props> = (props) => {

  const {movieList} = props

  return (
    <ul className={styles.container}>

      {movieList.map((el , index) => {

        return (

          <li className={styles.item} key={`Card${index}`} tabIndex={index + 2}>

              <MovieCard movieInfo={el}/>

          </li>

        )

      })}

    </ul>
  )
}

export default CardList