/* eslint-disable */
const replaceNextImports = {
    name: "next",
    setup(build) {
      // Replace all instance of require('next') with require('next/dist/server/next-server').default
      build.onEnd(async (result) => {
        console.log(`Build completed with ${result.errors.length} errors`);
        const fs = require("fs").promises;
        // Below statements must be wrapped inside the 'async' function:
        const data = await fs.readFile(
          ".next/standalone/custom-server.js",
          "utf8"
        );
        const res = data.replace(
          'require("next")',
          'require("next/dist/server/next-server").default'
        );
        await fs.writeFile(".next/standalone/custom-server.js", res, "utf8");
      });
    },
   };

   require("esbuild")
    .build({
      entryPoints: ["custom-server.js"],
      minify: true,
      platform: "node",
      bundle: true,
      external: ["next"],
      outfile: ".next/standalone/custom-server.js", // .next/standalone/custom-server.js
      target:"esnext",
      plugins: [replaceNextImports],
    })
    .catch(() => process.exit(1));

    console.log("finished?");
   