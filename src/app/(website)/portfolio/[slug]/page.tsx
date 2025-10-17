import VideoDetailClient from "@/Components/Portfolio/VideoDetails";

interface Params {
  slug: string;
}

// Mark the page as `async` if you need to fetch data
export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  // Example: fetch additional data
  // const data = await fetch(`https://api.example.com/videos/${slug}`).then(res => res.json());

  return <VideoDetailClient slug={slug} />;
}
