import { useAppStore } from "./useAppStore";
import { useEffect, useState } from "react";
import type { App } from "@/core/entities/App";
import { FindAllAppsUseCase } from "@/core/useCases/findAllApps";
import { LocalAppRepository } from "@/infrastructure/repositories/LocalAppRepository";

export const useAppList = () => {
  const apps = useAppStore((s) => s.apps);
  const setApps = useAppStore((s) => s.setApps);
  const filters = useAppStore((s) => s.filters);
  const [filtered, setFiltered] = useState<App[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const repo = new LocalAppRepository();
      const useCase = new FindAllAppsUseCase(repo);
      const result = await useCase.execute();
      setApps(result);
    };
    fetch();
  }, [setApps]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const filteredApps = apps.filter((app) => {
        const matchName = filters.name
          ? app.name.toLowerCase().includes(filters.name.toLowerCase())
          : true;
        const matchCategory = filters.category
          ? app.category === filters.category
          : true;
        const matchPlatform = filters.platform
          ? app.platform === filters.platform
          : true;

        return matchName && matchCategory && matchPlatform;
      });

      setFiltered(filteredApps);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [apps, filters]);

  const reload = async () => {
    const repo = new LocalAppRepository();
    const useCase = new FindAllAppsUseCase(repo);
    const result = await useCase.execute();
    setApps(result);
  };

  return { apps: filtered, loading, reload };
};
