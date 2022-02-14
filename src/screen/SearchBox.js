import "./Style.css"
function SearchBox({searchfield, searchChange}){
    return(
        <div>
            <input type="search" placeholder="input name to search" onChange={searchChange} className="input" />
        </div>

    );
}


export default SearchBox;