import type { App } from "../entities/App";
import type { AppRepository } from "../repositories/AppRepository";

export class UpdateAppUseCase {
  constructor(private readonly repository: AppRepository) {}

  async execute(app: App): Promise<void> {
    await this.repository.update(app);
  }
}
