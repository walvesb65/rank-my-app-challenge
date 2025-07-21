import type { AppRepository } from "../repositories/AppRepository";

export class RemoveAppUseCase {
  constructor(private readonly repository: AppRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}
