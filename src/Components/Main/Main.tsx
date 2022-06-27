import React, { Suspense } from 'react'
import axios from 'axios'
import styles from './Main.module.scss'
import Search from '../Search/Search'
import CardList from '../CardList/CardList'
import { IMovieInfoType } from '../../types/app.types'

//e111edda



const Main = () => {

  const [movieList, setMovieList] = React.useState([])
  const [movieListFiltered, setMovieListFiltered] = React.useState([])
  const [loadingState, setLoadingState] = React.useState({loading: false, message: 'Loading...'})


  const loadingMessageController = (message: string, response: string) => {

    const newLoadingState = response.toLowerCase() === 'false' 

    setLoadingState({loading: newLoadingState, message: message})

  }

  const fetcApi = async (searchValue: string = 'Guardians') => {

    setLoadingState({...loadingState, loading: true})

    const movieList = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=e111edda`)

    const [response , errorText] = [movieList.data.Response, movieList.data.Error]

    loadingMessageController(errorText, response)

    if(response.toLowerCase() !== 'false'){

      const formatted = movieList.data.Search.map((el: IMovieInfoType) => {
  
        return {
          Poster: el.Poster,
          Title: el.Title,
          Year: el.Year
        } 
        
      })
  
      setMovieListFiltered(formatted)
      
      setMovieList(formatted)
  
      setLoadingState({...loadingState, loading: false})

    }


  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

    const searchValue = e.target.value.toLowerCase()

    const searchFilter = searchValue.length ? searchValue : 'guardians'

    fetcApi(searchFilter)

  }


  React.useEffect(() => {

    fetcApi()

  },[])


  return (

  movieList.length ? (

     <div className={styles.container}> 

        <Search searchOnChange={handleSearch}/>

        {loadingState.loading ?(

          <div className={styles.errorHolder}>

            <h2 tabIndex={1}>{loadingState.message}</h2>

          </div>
        
        
        ) : <CardList movieList={movieListFiltered} />}
       
     </div>

    ) : null
    
  )
}

export default Main