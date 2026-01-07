import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        fullname, // backend expects fullname
        email,
        password,
      });

      setMessage("Registration Successful ✔");
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Registration Failed ✘");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4"
    >
      {/* Glass Card */}
      <div
        className="w-full max-w-md p-8 rounded-2xl
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-2xl text-white"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-slate-300 mb-6">
          Join LoanPulse today
        </p>

        {message && (
          <p
            className={`text-center text-sm mb-4 ${
              message.includes("Successful")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* FULL NAME */}
          <label className="text-sm text-slate-200">Full Name</label>
          <input
            type="text"
            className="w-full mt-1 mb-4 px-4 py-2 rounded-lg
              bg-white/20 border border-white/30
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          {/* EMAIL */}
          <label className="text-sm text-slate-200">Email</label>
          <input
            type="email"
            className="w-full mt-1 mb-4 px-4 py-2 rounded-lg
              bg-white/20 border border-white/30
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <label className="text-sm text-slate-200">Password</label>
          <input
            type="password"
            className="w-full mt-1 mb-6 px-4 py-2 rounded-lg
              bg-white/20 border border-white/30
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="w-full py-2 rounded-full font-semibold
              bg-cyan-400 text-slate-900
              hover:bg-cyan-300 transition"
          >
            Register
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-slate-300 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
