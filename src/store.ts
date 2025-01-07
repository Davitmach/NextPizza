import { create } from 'zustand';


interface MenuState {
  menuState: string; 
  setMenu: (newState: string) => void; 
}
interface SortState {
  sortState: string; 
  setSort: (newState: string) => void; 
}

export const useMenuState = create<MenuState>((set) => ({
  menuState: '', 
  setMenu: (newState: string) => set({ menuState: newState }),
}));


export const useSortState = create<SortState>((set) => ({
  sortState: '', 
  setSort: (newState: string) => set({ sortState: newState }),
}));

