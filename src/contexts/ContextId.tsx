import { createContext } from "react";

type ContextTypeId = {
        selectedGenreId: number;
        setSelectedGenreId: Function;     
}

const initialState:ContextTypeId = {
    selectedGenreId: 1,
    setSelectedGenreId: () => { console.log('Tudo normal!')}     
}

export const ContextId = createContext<ContextTypeId>(initialState);