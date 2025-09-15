import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/1200x/54/d5/7d/54d57d87f7fd99d604ab0fb6fb5485d1.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Career Counsellor AI</h1>
        <p className="mb-6 text-lg text-gray-300">
          Get personalized career guidance and track your progress.
        </p>
        {/* Buttons removed */}
      </div>
    </div>
  );
}

export default LandingPage;
