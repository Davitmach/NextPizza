import { create } from 'zustand';


interface MenuState {
  menuState: string; 
  setMenu: (newState: string) => void; 
}
interface SortState {
  sortState: string; 
  setSort: (newState: string) => void; 
}
interface LoggedState {
  logged: boolean; 
  setLogged: (newState: boolean) => void; 
}
interface PayedState {
  payed: boolean; 
  setPayed: (newState: boolean) => void; 
}
interface AddressState {
  address: string; 
  setAddress: (newState: string) => void; 
}
export const useMenuState = create<MenuState>((set) => ({
  menuState: '', 
  setMenu: (newState: string) => set({ menuState: newState }),
}));


export const useSortState = create<SortState>((set) => ({
  sortState: '', 
  setSort: (newState: string) => set({ sortState: newState }),
}));

export const useLogged = create<LoggedState>((set)=> ({
  logged:false,
  setLogged:(newState:boolean)=> set({logged:newState})
}))


export const usePayed = create<PayedState>((set)=> ({
  payed:false,
 setPayed:(newState:boolean)=> set({payed:newState})
}))
export const useAddress = create<AddressState>((set)=> ({
  address:'',
  setAddress:(newState:string)=> set({address:newState})
}))