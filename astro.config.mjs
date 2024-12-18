import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mujtabachang.com/",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  // Old website redirects
  redirects: {
    "/about-me": "/",
    "/about-me.html": "/",
    "/projects.html": "/projects",
    "/personal--fun-projects.html": "/projects",
    // For projects
    "/mmg-device.html": "/projects/mmg-device",
    "/mmg-device": "/projects/mmg-device",
    "/marvin---the-ball-following-robot.html": "/projects/marvin-the-ball-following-robot",
    "/marvin---the-ball-following-robot": "/projects/marvin-the-ball-following-robot",
    "/interactive-jacket-for-cyclists.html": "/projects/interactive-jacket-for-cyclists",
    "/interactive-jacket-for-cyclists": "/projects/interactive-jacket-for-cyclists",
    "/autonomous-solar-watercraft.html": "/projects/autonomous-solar-watercraft",
    "/autonomous-solar-watercraft": "/projects/autonomous-solar-watercraft"
  }
});