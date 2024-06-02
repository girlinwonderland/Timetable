import styles from './Table.module.scss';
import React from 'react';
import { useTableResize } from 'shared/lib/hooks/useTableResize';

const DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const HOURS: string[] = [
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
];



export const Table = () => {
  
  const {
    tableRef,
    initResize,
  } = useTableResize();
  
  
  
  return (
    <div className={styles.wrapper} ref={tableRef}>
      { DAYS.map((day) => <div key={day} className={styles.header}>
        {day}
        <span className={styles.resizeHandle} onMouseDown={initResize}></span>
      </div>) }
      { HOURS.map((hour, i) => (
        <React.Fragment key={hour}>
          {
            DAYS.map((day) => (
              <React.Fragment key={day+hour}>
                <div className={styles.hour}>{hour}</div>
                <div className={styles.item}></div>
              </React.Fragment>
            ))
          }
        </React.Fragment>
      )) }
    </div>
  )
}
