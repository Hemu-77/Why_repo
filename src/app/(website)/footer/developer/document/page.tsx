import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function APIDocumentationPage() {
  return (
    <FooterPageLayout title="API Documentation">
      <p>
        Welcome to the official <span className="text-red-500 font-semibold">API Documentation</span>. Our API allows you to programmatically
        access and manage your data, giving you the power to build custom
        integrations and applications.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Getting Started</h3>
      
      <h4 className="font-semibold mt-4 mb-1">Authentication</h4>
      <p>
        All API requests require an API key for authentication. Include your
        key in the `Authorization` header as a Bearer token.
      </p>
      
      <h4 className="font-semibold mt-4 mb-1">Base URL</h4>
      <p>
        The base URL for all API requests is: <code className="text-sm bg-gray-800 p-1 rounded">https://api.yourcompany.com/v1</code>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🔗 Endpoints</h3>
      
      <h4 className="font-semibold mt-4 mb-1">GET /users</h4>
      <p className="text-sm text-gray-400">
        Retrieves a list of all users.
      </p>
      <div className="bg-gray-800 p-4 rounded-md mt-2">
        <span className="text-green-400">GET</span> <span className="text-white">/users</span>
      </div>
      
      <h5 className="font-semibold mt-4">Example Request</h5>
      <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-sm text-gray-300">
        <code>
          {`curl -X GET 'https://api.yourcompany.com/v1/users' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`}
        </code>
      </pre>

      <h5 className="font-semibold mt-4">Example Response</h5>
      <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-sm text-gray-300">
        <code>
          {`{
  "status": "success",
  "data": [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Smith" }
  ]
}`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚨 Error Codes</h3>
      <p>
        Our API uses standard HTTP response codes to indicate success or failure.
        Common error codes include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">400 Bad Request:</span> The request was invalid or could not be understood.</li>
        <li><span className="text-red-500">401 Unauthorized:</span> The API key is missing or invalid.</li>
        <li><span className="text-red-500">404 Not Found:</span> The requested resource does not exist.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">🤝 Developer Support</h3>
      <p>
        If you have any questions or need help, join our developer community or
        contact our support team directly.
      </p>
      <p className="mt-2">
        <a href="#" className="text-red-500 underline">Join our Developer Community</a>
      </p>
    </FooterPageLayout>
  );
}