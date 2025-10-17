import VideoDetailClient from "@/Components/Portfolio/VideoDetails";


// Mark the page as `async` if you need to fetch data
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Example: fetch additional data
  // const data = await fetch(`https://api.example.com/videos/${slug}`).then(res => res.json());

  return <VideoDetailClient slug={slug} />;
}
