import type { App } from "@/core/entities/App";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  apps: App[];
};

const AppList = ({ apps }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {apps.map((app) => (
        <Card
          key={app.id}
          title={app.name}
          hoverable
          className="cursor-pointer"
          onClick={() => navigate(`/app/${app.id}`)}
        >
          <p>
            <strong>Categoria:</strong> {app.category}
          </p>
          <p>
            <strong>Plataforma:</strong> {app.platform}
          </p>
          <p>
            <strong>URL:</strong>{" "}
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              onClick={(e) => e.stopPropagation()}
            >
              {app.url}
            </a>
          </p>
        </Card>
      ))}
    </div>
  );
};

export default AppList;
