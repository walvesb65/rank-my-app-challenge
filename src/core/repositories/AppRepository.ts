import type { App } from "@/core/entities/App";

export interface AppRepository {
  save(app: App): Promise<void>;
  findAll(): Promise<App[]>;
}
