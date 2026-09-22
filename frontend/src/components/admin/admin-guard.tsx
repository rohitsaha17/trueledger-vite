import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api, getToken, clearToken } from "@/lib/api";
import type { Admin } from "@/types/database";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null | undefined>(
    getToken() ? undefined : null,
  );

  useEffect(() => {
    if (!getToken()) return;
    api
      .get<Admin>("/auth/me")
      .then(setAdmin)
      .catch(() => {
        clearToken();
        setAdmin(null);
      });
  }, []);

  if (admin === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="size-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!admin) return <Navigate to="/admin/login" replace />;

  return <>{children}</>;
}
