import create from 'zustand';

type State = {
    query: string;
    setQuery: (query: string) => void;
};

const useStore = create<State>((set) => ({
    query: '',
    setQuery: (query) => set({ query }),
    
}));

export default useStore;