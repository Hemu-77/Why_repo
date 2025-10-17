import VideoDetailClient from "@/Components/Portfolio/VideoDetails";


export default function Page({ params }: { params: { slug: string } }) {
  return <VideoDetailClient slug={params.slug} />;
}