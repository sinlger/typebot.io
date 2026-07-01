import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    // monorepo 下可能存在多份 React 副本（app 本地 + 根 hoisted），
    // 导致 lucide-react 等 peerDep 内部 context 与 app 渲染用的 React 不一致，
    // 触发 "Invalid hook call / useContext of null"。强制去重到单一实例。
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  optimizeDeps: {
    // lucide-react@1.x 的 CJS/ESM 混合 + 无 exports 字段，让 deps optimizer
    // 无法稳定预构建（偶发 "file does not exist" 与 null context）。
    // 排除后由 Vite 直接按其 ESM 入口解析，与 app 共享同一 React 实例。
    exclude: ["lucide-react"],
  },
})
