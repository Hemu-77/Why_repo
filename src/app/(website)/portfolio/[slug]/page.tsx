import VideoDetailClient from "@/Components/Portfolio/VideoDetails";

// Notice: no explicit PageProps type
export default function Page({ params }: { params: { slug: string } }) {
  // Just pass the slug to the client component
  return <VideoDetailClient slug={params.slug} />;
}
