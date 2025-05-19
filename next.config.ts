//next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    // Opción sencilla: permitir el dominio completo
    domains: ["image.tmdb.org"],
   },
};

export default nextConfig;
