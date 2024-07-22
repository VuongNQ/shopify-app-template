import preact from "@preact/preset-vite";
import { defineConfig, loadEnv, UserConfig } from "vite";
import pageReload from "vite-plugin-page-reload";
import shopify from "vite-plugin-shopify";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((configRaw: UserConfig) => {
  const { mode } = configRaw;
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.

  // Load app-level env vars to node-level env vars.
  // console.log(process.env)
  Object.assign(process.env, loadEnv(mode || "", process.cwd()));

  const config: Record<string, string | number | Array<unknown> | Record<string, unknown>> = {
    // vite config
    plugins: [
      preact(),
      tsconfigPaths(),
      shopify(),
      pageReload("/tmp/extension.update", {
        delay: 2000,
      }),
    ],
    /*  resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
    }, */
    build: {
      // sourcemap: true,
      rollupOptions: {
        output: {
          //  manualChunks: {
          //   vendor_core: ["preact", "preact-custom-element", "preact/jsx-runtime"],
          //   vendor_tanstack: ["@tanstack/react-query"],
          //   vendor_swr: ["swr"],
          //   vendor_rc_progress: ["rc-progress"],
          //   vendor_usehooks_ts: ["usehooks-ts"],
          //   vendor_react_tooltip: ["react-tooltip"],
          // },
          // manualChunks: (id: string, { getModuleInfo }: IGetModuleInfo) => {
          //   const moduleInfo = getModuleInfo(id);
          //   /*  if (moduleInfo.isEntry)   return 'app';   */
          //   if (
          //     !moduleInfo.isEntry &&
          //     [
          //       // "node_modules/preact",
          //       "node_modules/preact-custom-element",
          //       "node_modules/preact/jsx-runtime",
          //       "node_modules/preact/hook",
          //       "node_modules/preact/compat",
          //       "vite/preload-helper",
          //     ].some((i) => moduleInfo.id.includes(i))
          //   ) {
          //     return "vendor_core";
          //   }
          // },
        },
      },
    },
  };

  return config;
});
