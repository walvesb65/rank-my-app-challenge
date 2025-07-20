import { useEffect, useState, useCallback } from "react";
import { FindAllAppsUseCase } from "@/core/useCases/findAllApps";
import { LocalAppRepository } from "@/infrastructure/repositories/LocalAppRepository";
import { useAppStore } from "./useAppStore";

export const useAppList = () => {
  const [loading, setLoading] = useState(false);
  const { apps, setApps } = useAppStore();

  const reload = useCallback(async () => {
    setLoading(true);
    const repo = new LocalAppRepository();
    const useCase = new FindAllAppsUseCase(repo);
    const result = await useCase.execute();
    setApps(result);
    setLoading(false);
  }, [setApps]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { apps, loading, reload };
};
