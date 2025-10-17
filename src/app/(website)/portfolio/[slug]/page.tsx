import VideoDetailClient from "@/Components/Portfolio/VideoDetails";

/* eslint-disable */

interface VideoPageProps {
  params: { slug: string };
}

export default function Page({ params }: VideoPageProps) {
  return <VideoDetailClient slug={params.slug} />;
}
