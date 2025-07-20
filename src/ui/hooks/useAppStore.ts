import { create } from "zustand";
import type { App } from "@/core/entities/App";

interface Filters {
  name: string;
  category: string;
  platform: string;
}

interface AppState {
  apps: App[];
  filters: Filters;
  setApps: (apps: App[]) => void;
  setFilters: (filters: Filters) => void;
}

export const useAppStore = create<AppState>((set) => ({
  apps: [],
  filters: {
    name: "",
    category: "",
    platform: "",
  },
  setApps: (apps) => set({ apps }),
  setFilters: (filters) => set({ filters }),
}));
