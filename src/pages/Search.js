import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { action } from '../reducer';


function Search({hidebuttons}) {
    const [{}, dispatch] = useStateValue()
    
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const search = (e) => {
        e.preventDefault()
        navigate('/search')
        dispatch({
            type: action.SET_SEARCH_TERM,
            term: input
        })
        setInput('')
    }
  return (
    <form className='search'>
        <div className="search-input">
            <SearchIcon className='searchIcon'/>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <MicIcon />
        </div>
        {!hidebuttons ? (
                 <div className="search-buttons">
                 <Button onClick={search} type='submit' variant='outlined' >Google Search</Button>
                 <Button  variant='outlined' >I am feeling lucky</Button>
             </div>
        ) : (
            <div className="search-buttons" style={{display: 'none'}}>
                 <Button onClick={search} type='submit' variant='outlined' >Google Search</Button>
             </div>
        )}
       
        
    </form>
  )
}

export default Search