import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Can't be empty";
    }
    if (!password) {
      newErrors.password = "Can't be empty";
    }
    if (!repeatPassword) {
      newErrors.repeatPassword = "Can't be empty";
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = "Passwords don't match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-darkBlue flex flex-col items-center justify-center p-6">
      <Link to="/" className="mb-14 md:mb-20">
        <img src="/assets/logo.svg" alt="Logo" className="w-8 h-6" />
      </Link>

      <div className="bg-semiDarkBlue w-full max-w-[400px] p-6 md:p-8 rounded-2xl">
        <h1 className="text-3xl font-light text-pureWhite mb-8">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-transparent border-b pb-4 px-4 text-pureWhite font-light outline-none transition-colors caret-red ${
                errors.email
                  ? "border-red"
                  : "border-greyishBlue focus:border-pureWhite"
              }`}
            />
            {errors.email && (
              <span className="absolute right-4 top-0 text-xs text-red font-light">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-transparent border-b pb-4 px-4 text-pureWhite font-light outline-none transition-colors caret-red ${
                errors.password
                  ? "border-red"
                  : "border-greyishBlue focus:border-pureWhite"
              }`}
            />
            {errors.password && (
              <span className="absolute right-4 top-0 text-xs text-red font-light">
                {errors.password}
              </span>
            )}
          </div>

          {/* Repeat Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className={`w-full bg-transparent border-b pb-4 px-4 text-pureWhite font-light outline-none transition-colors caret-red ${
                errors.repeatPassword
                  ? "border-red"
                  : "border-greyishBlue focus:border-pureWhite"
              }`}
            />
            {errors.repeatPassword && (
              <span className="absolute right-4 top-0 text-xs text-red font-light">
                {errors.repeatPassword}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red text-pureWhite font-light py-3 rounded-md hover:bg-pureWhite hover:text-darkBlue transition-colors mt-4"
          >
            Create an account
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm font-light text-pureWhite mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-red hover:underline ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
