/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.BASE_URL || "https://turboclone.lorenzopalaia.com",
  generateRobotsTxt: true,
  outDir: "public",
  changefreq: "yearly",
  priority: 1,
  exclude: ["/terms", "/privacy"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
