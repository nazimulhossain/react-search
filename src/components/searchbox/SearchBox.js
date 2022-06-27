import './SearchBox.css';

const SearchBox = ({onSearchHandler})=>{
    return (
        <div className='SearchBox'>
            <input type='search' placeholder='Monster Search' onChange={onSearchHandler}></input>
        </div>

    )
    

}

export default SearchBox;