import { create } from "zustand";
import type { App } from "@/core/entities/App";
import { LocalAppRepository } from "@/infrastructure/repositories/LocalAppRepository";
import { UpdateAppUseCase } from "@/core/useCases/updateApp";
import { RemoveAppUseCase } from "@/core/useCases/removeApp";
import { CreateAppUseCase } from "@/core/useCases/createApp";

const repository = new LocalAppRepository();
const createAppUseCase = new CreateAppUseCase(repository);
const updateAppUseCase = new UpdateAppUseCase(repository);
const removeAppUseCase = new RemoveAppUseCase(repository);

interface AppFilters {
  name: string;
  category: string;
  platform: string;
}

interface AppState {
  apps: App[];
  filters: AppFilters;
  setApps: (apps: App[]) => void;
  setFilters: (filters: AppFilters) => void;
  createApp: (app: Omit<App, "id">) => Promise<void>;
  updateApp: (app: App) => Promise<void>;
  removeApp: (id: string) => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  apps: [],
  filters: { name: "", category: "", platform: "" },

  setApps: (apps) => set({ apps }),

  setFilters: (filters) => set({ filters }),

  createApp: async (input) => {
    await createAppUseCase.execute(input);
    const apps = await repository.findAll();
    set({ apps });
  },

  updateApp: async (updatedApp) => {
    await updateAppUseCase.execute(updatedApp);
    const apps = await repository.findAll();
    set({ apps });
  },

  removeApp: async (id) => {
    await removeAppUseCase.execute(id);
    const apps = await repository.findAll();
    set({ apps });
  },
}));
