import { create } from "zustand";
import type { App } from "@/core/entities/App";

interface AppState {
  apps: App[];
  setApps: (apps: App[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  apps: [],
  setApps: (apps) => set({ apps }),
}));
