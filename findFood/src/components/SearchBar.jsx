import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            onSearch(searchInput);
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter postcode..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;