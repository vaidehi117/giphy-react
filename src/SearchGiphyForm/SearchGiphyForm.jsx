import { useState } from 'react';

export default function SearchGiphyFrom ({getGiphySearch}) {

    const [gifFromState, setGifFromState] = useState('');

    function handleChange(e) {
        console.log(e.target.value)
        setGifFromState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        getGiphySearch(gifFromState);
        setGifFromState('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Giphy" value={gifFromState} onChange={handleChange} name='title' />
            <button>Search</button>
        </form>
    )
}