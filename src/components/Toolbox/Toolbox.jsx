import { useState } from 'react';
import styles from './Toolbox.module.scss';

export default function Toolbox() {
  const [activeToolId, setActiveToolId] = useState(null);

  const handleToolClick = (id) => {
    // Eğer aktif öğe zaten seçiliyse, onu kaldır (toggle işlevi)
    setActiveToolId(activeToolId === id ? null : id);
  };
  const tools=[
    {
      id:1,
      icons:"/images/icons/move.png"
    },
    {
      id:2,
      icons:"/images/icons/select2.png"
    },
    {
      id:3,
      icons:"/images/icons/croptool.png"
    },
    {
      id:4,
      icons:"/images/icons/brushtool.png"
    },
    {
      id:5,
      icons:"/images/icons/zoomout.png"
    },
    {
      id:6,
      icons:"/images/icons/zoomin.png"
    },
    {
      id:7,
      icons:"/images/icons/pentool.png"
    },
    {
      id:8,
      icons:"/images/icons/handtool.png"
    },
    {
      id:9,
      icons:"/images/icons/text.png"
    },
    {
      id:10,
      icons:"/images/icons/pathin.png"
    },
    {
      id:11,
      icons:"/images/icons/pathout.png"
    },

  ]
  return (
<section className={styles.toolbox}>
  <div className={styles.content}>
    {tools.map((tool)=>(
      <div key={tool.id} 
        className={`${styles.tool} ${activeToolId === tool.id ? styles.activeTool : ''}`}
        onClick={() => handleToolClick(tool.id)}
        >
        <img src={tool.icons} alt="Tool" />
      </div>
    ))}
  </div>
</section>
)
}