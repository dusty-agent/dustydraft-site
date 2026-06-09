export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://dustydraft.com/sitemap.xml",
    };
  }