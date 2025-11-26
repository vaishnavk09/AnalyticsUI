import { create } from 'zustand';

interface AppState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const useStore = create<AppState>((set) => ({
    isSidebarOpen: true,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    isDarkMode: false,
    toggleDarkMode: () => {
        set((state) => {
            const newMode = !state.isDarkMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return { isDarkMode: newMode };
        });
    },
}));
