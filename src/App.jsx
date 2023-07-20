import { useState, useEffect } from 'react'
import './App.css'
import SearchGiphyFrom from './SearchGiphyForm/SearchGiphyForm'; 

function App() {

  const [searchGif, setSearchGif] = useState('css');
  const [giphy, setGiphy] = useState({})
  
  function getGiphySearch(gifTitle) {
    setSearchGif(gifTitle)
  }

  useEffect(() => {
    const giphyUrl = `http://www.api.giphy.com/v1/gifs/search?api_key=c9f7440b&t=${searchGif}`

    async function getGiphyInfo() {
      try{
        const apiResponse = await fetch(giphyUrl);

        const data = await apiResponse.json();
        console.log(data);

        setGiphy(data);

      }catch(err) {
        console.log(err, 'err from api call');
      }
    }

    getGiphyInfo();
    
  }, [searchGif]);


  return (
    <>
    <p>The User Is Sraching For</p>
    <SearchGiphyFrom getGiphySearch={getGiphySearch} />
    {giphy.Title ? <GiphyInfo giphy={giphy}/> : null}
    </>
  )
}

export default App


// api.giphy.com/v1/gifs/search?api_key=c9f7440b&t=${searchTerm}