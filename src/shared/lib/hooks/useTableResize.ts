import { MouseEvent, useCallback, useRef, useState } from 'react';

//TODO useState
const columns = [
  { header: 'Sunday', size: '43px minmax(125px, 205px)' },
  { header: 'Monday', size: '43px minmax(125px, 205px)' },
  { header: 'Tuesday', size: '43px minmax(125px, 205px)' },
  { header: 'Wednesday', size: '43px minmax(125px, 205px)' },
  { header: 'Thursday', size: '43px minmax(125px, 205px)' },
  { header: 'Friday', size: '43px minmax(125px, 205px)' },
  { header: 'Saturday', size: '43px minmax(125px, 205px)' },
];

export const useTableResize = () => {
  const [headerStartResize, setHeaderStartResize] = useState<HTMLElement | null>(null);
  
  const tableRef = useRef<HTMLDivElement | null>(null);
  
  const onMouseMove = (e: MouseEvent<HTMLElement>) => requestAnimationFrame(() => {
    /** на сколько прикселей от левого края произошла прокрутка */
    const horizontalScrollOffset = document.documentElement.scrollLeft;
    /** расстояние ячейки header от левого края родителя */
    const headerOffsetLeft = headerStartResize?.offsetLeft || 0;
    /** координата мыши по оси X относительно окна браузера */
    const elementX = e.clientX;
    //TODO 43 ячейка времени, 1 border
    const width = (horizontalScrollOffset + elementX) - headerOffsetLeft - 43 - 1;
    const column = columns.find(({ header }) => header === headerStartResize?.textContent)!;
    //TODO minmax
    column.size = `43px minmax(${Math.max(125, width)}px, 125px)`;
    
    if (tableRef.current) {
      tableRef.current.style.gridTemplateColumns = columns
      .map(({ size }) => size)
      .join(' ');
    }
  });
  
  const onMouseUp = useCallback(() => {
    //TODO
    // @ts-ignore
    tableRef.current?.removeEventListener('mousemove', onMouseMove);
    tableRef.current?.removeEventListener('mouseup', onMouseUp);
  },[]);
  
  const initResize = useCallback((event: MouseEvent<HTMLElement>) => {
    setHeaderStartResize((event.target as HTMLElement).parentNode as HTMLElement);
    //TODO
    // @ts-ignore
    tableRef.current?.addEventListener('mousemove', onMouseMove);
    tableRef.current?.addEventListener('mouseup', onMouseUp);
  },[]);
  
  return {
    initResize,
    tableRef
    
  }
}
