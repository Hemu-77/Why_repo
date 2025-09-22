import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function ChangeLogPage() {
  return (
    <FooterPageLayout title="Change Log">
      <p>
        Welcome to our official <span className="text-red-500 font-semibold">Change Log</span>. This is where we document all the new
        features, improvements, and bug fixes we&apos;ve released to make our
        platform even better. We&apos;re committed to transparency and continuous improvement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 August 2025 - Version 1.2.0</h3>
      
      <h4 className="font-semibold mt-4 mb-1 text-gray-400">✨ New Features</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Added new collaboration tools, allowing multiple users to edit projects simultaneously.</li>
        <li>Introduced a customizable dashboard, so you can organize widgets to fit your workflow.</li>
      </ul>
      
      <h4 className="font-semibold mt-4 mb-1 text-gray-400">🛠️ Improvements</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Optimized image and video loading speed for faster project previews.</li>
        <li>Enhanced the user interface with a new, more intuitive color palette.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-1 text-gray-400">🐛 Bug Fixes</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Fixed an issue where the search function would occasionally fail to return accurate results.</li>
        <li>Resolved a bug that caused incorrect display of text on mobile devices.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">⭐ July 2025 - Version 1.1.0</h3>
      
      <h4 className="font-semibold mt-4 mb-1 text-gray-400">✨ New Features</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Launched the first version of our integrated analytics dashboard.</li>
      </ul>
      
      <h4 className="font-semibold mt-4 mb-1 text-gray-400">🛠️ Improvements</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Improved the account creation flow, making it faster and more user-friendly.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-1 text-gray-400">🐛 Bug Fixes</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Addressed several minor UI glitches.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">➡️ Looking Ahead</h3>
      <p>
        We&apos;re constantly working on new features and improvements. Stay tuned to our blog or join our community to see what&apos;s coming next.
      </p>
    </FooterPageLayout>
  );
}