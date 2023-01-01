import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { API_KEY, Image_Url } from '../../constants/constants'
import './RowPost.css'


function RowPost(props) {
  const[movie,setMovie] = useState([])
  const[urlId,setUrlId] = useState('')
  useEffect(()=> {
    axios.get(props.url).then((response)=> {
      
      setMovie(response.data.results)
    }).catch((err)=>console.log(err))
  },[props.url])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  }

  const getId = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {
      if(response.data.results.length!==0){  
      setUrlId(response.data.results[0])
      }
    })
  }
  

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj)=>
          <img onClick={(()=>getId(obj.id))} className={props.isSmall?'smallposter':'poster'} src={`${Image_Url+obj.backdrop_path}`}alt="" />
          )}
      </div>
     {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
