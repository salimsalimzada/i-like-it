import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
// https://vitejs.dev/config/

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"~": path.resolve(dirname, "./src"),
			"~Components": path.resolve(dirname, "./src/Components"),
			"~Modules": path.resolve(dirname, "./src/Modules"),
		},
	},
});
