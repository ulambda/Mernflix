import create from 'zustand';

export default create<{
    sideNavOpen: boolean;
    toggleSideNav: () => void;

}>((set) => ({
    sideNavOpen: false,
    toggleSideNav: () => set((state) => ({ sideNavOpen: !state.sideNavOpen })),
    
}));