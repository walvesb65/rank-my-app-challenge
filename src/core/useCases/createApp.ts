import type { App } from "../entities/App";
import type { AppRepository } from "../repositories/AppRepository";
import { v4 as uuid } from "uuid";

export class CreateAppUseCase {
  constructor(private readonly repository: AppRepository) {}

  async execute(input: Omit<App, "id">): Promise<void> {
    const app: App = {
      id: uuid(),
      ...input,
    };

    await this.repository.save(app);
  }
}
