import type { App } from "@/core/entities/App";
import type { AppRepository } from "@/core/repositories/AppRepository";

export class LocalAppRepository implements AppRepository {
  private storageKey = "apps";

  async save(app: App): Promise<void> {
    const apps = await this.findAll();
    apps.push(app);
    localStorage.setItem(this.storageKey, JSON.stringify(apps));
  }

  async findAll(): Promise<App[]> {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
