function SearchBar({updateSearchText}){

    return (
        <div className="searchbar">
                <label>🔍</label> 
           
            <input
            type="text"
            id="search"
            placeholder="Juices, Strains, etc.."
            onChange={updateSearchText}
            />
        </div>
    )
}

export default SearchBar