import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  server: {
    port: 8003,
  },
  plugins: [
    tailwindcss(),
    viteTsConfigPaths({
      projects: ["tsconfig.app.json"],
    }),
    tanstackStart(),
    ...(globalThis.NX_GRAPH_CREATION ? [] : [nitro()]),
    viteReact(),
  ],
}));
