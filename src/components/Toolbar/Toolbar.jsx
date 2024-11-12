import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Toolbar.module.scss';
import NavMenu from '../NavMenu/NavMenu';


const Toolbar = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false); // İkon tıklanma durumunu yönetmek için
  const [showDetails, setShowDetails] = useState(true)
  const searchDetailsRef = useRef(null);


  const handleSearchClick = () => {
    setIsOpen(!isOpen); 
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value) {
      setShowDetails(true);
    } else {
      setShowDetails(false); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchDetailsRef.current && !searchDetailsRef.current.contains(event.target)) {
        setShowDetails(false); 
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, []);

  return (
    <section className={styles.toolbar}>
      <div className={styles.searchToolbar}>
        <div className={styles.inputBar}>
        <input
          type="text"
          className={`${styles.searchInput} ${isOpen ? styles.open : ''} ${searchText ? styles.hasText : ''}`}
          placeholder="Ara..."
          value={searchText}
          onChange={handleSearchChange}
        />
        {!isOpen && <FaSearch className={styles.searchIcon} onClick={handleSearchClick} />}
        {searchText && showDetails &&  (
        <div className={styles.searchDetails} ref={searchDetailsRef}>
          <p>Arama sonuçları burada görüntülenecek.</p>
        </div>
      )}
        </div>

      </div>
      <div className={styles.ActionBar}>
        <NavMenu/>
    </div>
    </section>
  );
};

export default Toolbar;
