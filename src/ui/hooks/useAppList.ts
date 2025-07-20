import { useAppStore } from "./useAppStore";
import { useEffect, useState } from "react";
import type { App } from "@/core/entities/App";

export const useAppList = () => {
  const apps = useAppStore((s) => s.apps);
  const filters = useAppStore((s) => s.filters);
  const [filtered, setFiltered] = useState<App[]>(apps);
  const [loading, setLoading] = useState(false);

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

  const reload = () => {
    setFiltered(apps);
  };

  return { apps: filtered, loading, reload };
};
