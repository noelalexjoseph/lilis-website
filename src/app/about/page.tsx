export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            About me
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
        </div>
        
        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <p className="text-xl mb-8 text-center font-light">
            Coming soon...
          </p>
          
          <p>
            This page will contain information about the photographer, their artistic vision, 
            background, and approach to photography.
          </p>
          
          <p>
            You can customize this content to include your story, experience, artistic philosophy, 
            and any other information you&apos;d like to share with visitors.
          </p>
        </div>
      </div>
    </div>
  );
}
