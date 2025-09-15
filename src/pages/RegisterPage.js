// src/pages/RegisterPage.js
import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    education: "",
    interests: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password || !formData.name) {
      setError("Name, Email, and Password are required.");
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save additional info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
        education: formData.education,
        interests: formData.interests,
        createdAt: new Date()
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-3" onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded"/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border p-2 rounded"/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="border p-2 rounded"/>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2 rounded"/>
        <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="interests" placeholder="Interests" value={formData.interests} onChange={handleChange} className="border p-2 rounded"/>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
