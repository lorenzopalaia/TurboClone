// Environment variables for serverless functions need to be handled properly in client components
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return process.env.NEXT_PUBLIC_PROD_URL || "";
  } else {
    return process.env.NEXT_PUBLIC_LOCALHOST_URL || "";
  }
}
