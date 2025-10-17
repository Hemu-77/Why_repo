import VideoDetailClient from "@/Components/Portfolio/VideoDetails";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return <VideoDetailClient slug={params.slug} />;
}
