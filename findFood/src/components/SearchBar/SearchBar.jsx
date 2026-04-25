import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            onSearch(searchInput);
        }
    };

    return (
        <form className="search-bar-container" onSubmit={handleSubmit}>
            <div className="search-bar-input-group">
                <input
                    type="text"
                    className="search-bar-input"
                    placeholder="Enter postcode..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="search-bar-button" type="submit">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;