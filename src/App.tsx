import { useEffect, useState } from 'react';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { ContextId } from './contexts/ContextId';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ContextId.Provider value={{selectedGenreId,setSelectedGenreId}}>
        <SideBar/>
        <Content />
      </ContextId.Provider>
    </div>
  );
}