import create from 'zustand';

type State = {
  websiteName: String;
  pageTitle: String;
  setPageTitle: (title: String) => void;
};

const useStore = create<State>((set) => ({
    websiteName: "Netflix",
    pageTitle: "",
    setPageTitle: (title: String) => set({pageTitle: title}),
}));

export default useStore;