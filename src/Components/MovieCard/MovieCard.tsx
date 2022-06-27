import React from 'react'
import { IMovieInfoType } from '../../types/app.types'
import styles from './MovieCard.module.scss'

type Props = {

  movieInfo: Partial<IMovieInfoType>

}

const MovieCard: React.FC<Props> = (props) => {

 const {movieInfo} = props
 const {Poster, Title, Year} = movieInfo

  return (
    <div className={styles.container}>

      <img 
       src={Poster?.includes('http') ?  Poster : 'http://dummyimage.com/200x400'}
       alt={movieInfo.Title}
       />
      <h1>{`${Title?.slice(0, 20)}...`}</h1>
      
      <h2>{Year}</h2>

    </div>  
  )
}

export default MovieCard