import "./Style.css";
import episode from "../../../db/Episode/Episode";
import React, { Component } from "react";
import SearchBox from "./SearchBox";

class Episode extends Component {
    constructor(){
        super()
        this.state ={
            query: episode,
            searchfield: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value });
        }
        render() {
            const filterQuery = this.state.query.filter(query => {
                return query.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            });

            const dataItem = filterQuery.map((list) => (
                <li className="drap">
                    <br/>
                    {list.name}<br/>
                    {list.birthday}<br/>
                    {list.occupation}<br/>
                    {list.img}<br/>
                    {list.status}<br/>
                    {list.appearance}<br/>
                    {list.nickname}<br/>
                    {list.portrayed}<br/>
                    {list.better_call_saul_appearance}
                </li>
    ));
    return (
        <div>
            <div>
              <h2>Episodes</h2>
            </div>
         
            <SearchBox searchChange ={this.onSearchChange} />

            <p className="drup"> {dataItem}</p>
            
            
        </div>
    );
}
}

export default Episode;
