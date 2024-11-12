import React, { useEffect, useRef, useState } from 'react';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({
    '1.Sınıf': false,
    '2.Sınıf': false,
    '3.Sınıf': false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };
  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(null);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.navMenu} ref={menuRef}>
      <ul>
        <li>
          <button onClick={() => handleMenuClick('menu1')}>Modeller</button>
          {openMenu === 'menu1' && (
            <ul>
              <li>A Modeli</li>
              <li>B Modeli</li>
              <li>C Modeli</li>
              <li>D Modeli</li>
              <li>E Modeli</li>
              <li>F Modeli</li>
              <li>G Modeli</li>
              <li>H Modeli</li>
              <li>I Modeli</li>
              <li>K Modeli</li>
            </ul>
          )}
        </li>
          <li>
      <button onClick={() => handleMenuClick('menu2')}>Sınıflar</button>
      {openMenu === 'menu2' && (
        <ul className={styles.checkList}>
          {Object.keys(checkedItems).map((item,index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  name={item}
                  checked={checkedItems[item]}
                  onChange={handleCheckboxChange}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      )}
    </li>
        <li>
          <button onClick={() => handleMenuClick('menu3')}>Katlar</button>
          {openMenu === 'menu3' && (
            <ul>
              <li>1.Kat</li>
              <li>2.Kat</li>
              <li>3.Kat</li>
              <li>4.Kat</li>
              <li>5.Kat</li>
              <li>6.Kat</li>
              <li>7.Kat</li>
              <li>8.Kat</li>
              <li>9.Kat</li>
              <li>10.Kat</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
