import React, { useState } from 'react'
import styles from './Home.module.scss';
import Container from '../../components/Tools/Container/Container';
import Toolbar from '../../components/Toolbar/Toolbar';
import Toolbox from '../../components/Toolbox/Toolbox';
import Draggable from 'react-draggable';

export default function Home() {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const features = [
    { label: "Genişlik", value: "50mm" },
    { label: "Yükseklik", value: "700mm" },
    { label: "Renk", value: "Mavi" },
    { label: "Oluşturulma", value: "10.10.2024" },
    { label: "Değiştirilme", value: "12.11.2024" },
    { label: "Bilgilendirme", value: "Giriş Kapsısı" },
    { label: "Oluşturan", value: "Ahmet" },
  ];

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY }); 
    setShowMenu(true);
  };

  const handleClick = () => {
    setShowMenu(false);
  };
  return (
      <section className={styles.homePage} onContextMenu={handleContextMenu} onClick={handleClick} >
      <Container large>
          <Toolbar/>
          <div className={styles.background}>
          <video src="/images/build.mp4" 
          autoPlay
          muted
          loop
          ></video>
          </div>

          <div onContextMenu={handleContextMenu} >
      {showMenu && (
        <div
        className={styles.rightCheck}
        style={{
          position: 'absolute',
          top: `${menuPosition.y}px`,
          left: `${menuPosition.x}px`,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          listStyle: 'none',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        }}
        >
             <table>
             <tbody>
          {features.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.label}:</strong></td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      )}
    </div>
    <Draggable>
    <div className={styles.toolbox}>
    <Toolbox/>
    </div>
    </Draggable>

      </Container>

    </section>
  )
}