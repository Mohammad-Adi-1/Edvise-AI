import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Your Dashboard
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Certifications Section */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <p>Explore certifications to boost your skills and career prospects.</p>
          <Link
            to="/certifications"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Certifications
          </Link>
        </div>

        {/* Courses Section */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">Courses</h2>
          <p>Browse and enroll in courses tailored to your career interests.</p>
          <Link
            to="/courses"
            className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            View Courses
          </Link>
        </div>

        {/* Colleges/Universities Section */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">Colleges & Universities</h2>
          <p>Check out top colleges and universities for higher studies.</p>
          <Link
            to="/colleges"
            className="mt-4 inline-block px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Explore Colleges
          </Link>
        </div>

        {/* Top People Section */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">Top People in Your Field</h2>
          <p>Learn from the most successful people in your desired career field.</p>
          <Link
            to="/top-people"
            className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            View Top People
          </Link>
        </div>

        {/* Entrance Exams Section */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">Entrance Exams</h2>
          <p>Prepare for entrance exams relevant to your career path.</p>
          <Link
            to="/entrance-exam"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Explore Exams
          </Link>
        </div>

        {/* Quiz Section */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">Quiz</h2>
          <p>Test your knowledge and improve your skills with quizzes.</p>
          <Link
            to="/quiz"
            className="mt-4 inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Take Quiz
          </Link>
        </div>
      </div>

      {/* Full-width AI Counselling Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 rounded-lg shadow p-8 hover:shadow-lg transition cursor-pointer text-center">
        <h2 className="text-2xl font-bold mb-4">AI Counselling</h2>
        <p className="mb-4">
          Start a personalized one-on-one career counselling session with AI.
        </p>
        <Link
          to="/career-session"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Start Session
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
