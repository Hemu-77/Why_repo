// types/next-fix.d.ts

declare module "next" {
    // Override faulty PageProps typing from Next.js 15.5.2
    export interface PageProps {
      params?: Record<string, string>;
      searchParams?: Record<string, string | string[] | undefined>;
    }
  }
  