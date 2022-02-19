import React from 'react';
import { headerStyles, searchTermStyles } from "../../styles/styles.js"
//import PropTypes from 'prop-types';
import { setSearchTerm } from './searchTermSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm } from './searchTermSlice.js';
import { selectHobby } from '../hobby/hobbySlice.js';


export function SearchTerm() {

    const searchTerm = useSelector(selectSearchTerm);
    const hobby = useSelector(selectHobby);
    const dispatch = useDispatch();

    let styles = headerStyles(hobby);

    const handleUserInput = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    return (
        <div>
            <div className="lower_header" style={styles}></div>
            <header style={styles}>
                <span className="AppName">Client for Reddit</span>
                <input
                    className="SearchInput"
                    style={searchTermStyles(hobby)}
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleUserInput}
                />
            </header>
        </div>
    );
}
/*
SearchTerm.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    hobby: PropTypes.string.isRequired
}
*/