const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

const TOKEN_KEY = "trueledger_token";

// Uploaded files are stored as "/api/uploads/<id>" so they keep working if the API moves.
const API_ORIGIN = new URL(BASE_URL, window.location.origin).origin;

export function resolveAssetUrl(url: string) {
  return url.startsWith("/api/uploads/") ? `${API_ORIGIN}${url}` : url;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message ?? "Request failed");
  return data as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
};

// Uploads an image/video and returns its stored url ("/api/uploads/<id>")
export async function uploadFile(file: File): Promise<string> {
  const res = await fetch(`${BASE_URL}/uploads`, {
    method: "POST",
    headers: {
      "Content-Type": file.type || "application/octet-stream",
      "X-Filename": encodeURIComponent(file.name),
      Authorization: `Bearer ${getToken() ?? ""}`,
    },
    body: file,
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message ?? "Upload failed");
  return data.url;
}
