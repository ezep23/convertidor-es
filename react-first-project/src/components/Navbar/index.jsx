import { useState } from 'react';

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter'){
            onSearch(search);
        }
    }

    return (
        <div>
            <p>Boleteria</p>
            <input 
                placeholder="Elige tu proximo evento" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search} 
            />
        </div>
    );
};

export default Navbar;