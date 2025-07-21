import type { App } from "@/core/entities/App";
import type { AppRepository } from "@/core/repositories/AppRepository";

const STORAGE_KEY = "apps";

export class LocalAppRepository implements AppRepository {
  async findAll(): Promise<App[]> {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  async save(app: App): Promise<void> {
    const apps = await this.findAll();
    apps.push(app);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  }

  async update(updatedApp: App): Promise<void> {
    const apps = await this.findAll();
    const updated = apps.map((app) =>
      app.id === updatedApp.id ? updatedApp : app
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  async remove(id: string): Promise<void> {
    const apps = await this.findAll();
    const filtered = apps.filter((app) => app.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }
}
