import type { App } from "../entities/App";
import type { AppRepository } from "../repositories/AppRepository";

export class FindAllAppsUseCase {
  constructor(private readonly repository: AppRepository) {}

  async execute(): Promise<App[]> {
    return await this.repository.findAll();
  }
}
