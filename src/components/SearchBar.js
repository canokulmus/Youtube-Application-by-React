import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState("")


    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onFormSubmitHere = (event) => {
        event.preventDefault();
        onFormSubmit(term);

    }


    return (
        <div className="search-bar ui segment ">


            <img src="/youtube.svg" alt="" style={{ width: "10%", margin: 0 }} />
            <form onSubmit={onFormSubmitHere} className="ui form">
                <div className="field">
                    <label htmlFor="">


                    </label>
                    <input
                        value={term}
                        type="text"
                        onChange={onInputChange}
                        placeholder="Search for videos"
                    />
                </div>

            </form>

        </div>
    );

}



export default SearchBar;