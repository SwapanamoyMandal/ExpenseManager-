import React, { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import NavButton from "./components/NavButton";
import Expense from "./pages/Expense";
import KhataPage from "./pages/KhataPage";
import AcknowlageBox from "./components/AcknowlageBox";
import LoadingPage from "./components/LoadingPage";

import { useAppContext } from "./context/AppContext";

const App = () => {
  const { expense, openacknowlagebox, isLoading,setclerkUserId, } = useAppContext();
  const [showSignUp, setShowSignUp] = useState(false);

  const{user,isLoaded,isSignedIn} = useUser()

  useEffect(()=>{
    if (isLoaded && isSignedIn) {
      setclerkUserId(user.id)
    }
  },[user,isSignedIn,isLoaded])

  return (
    <>
      <Toaster />

      {/* If user is signed out, show auth modal OVER the app */}
      <SignedOut>
        {/* App Background (visible behind login overlay) */}
        <div className="bg-gray-900 min-h-screen relative overflow-hidden">
          <Navbar />
          <NavButton />
          {expense ? <Expense /> : <KhataPage />}

          {/* Transparent Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-8 rounded-2xl shadow-2xl border border-white/20">
              {/* Title */}
              <h1 className="text-4xl font-extrabold text-white text-center mb-4 drop-shadow-md">
                {showSignUp ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="text-gray-200 text-center mb-6 text-sm">
                {showSignUp
                  ? "Sign up to start tracking your expenses."
                  : "Sign in to access your dashboard."}
              </p>

              {/* Clerk Form */}
              <div className="w-full flex justify-center">
                {showSignUp ? (
                  <SignUp
                    routing="hash"
                    appearance={{
                      elements: {
                        rootBox: "w-full",
                        card: "bg-transparent shadow-none w-full",
                        headerTitle: "text-white",
                        headerSubtitle: "text-gray-300",
                        formButtonPrimary:
                          "bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg py-2",
                      },
                      variables: {
                        colorPrimary: "#6366F1", // Tailwind Indigo-500
                      },
                    }}
                  />
                ) : (
                  <SignIn
                    routing="hash"
                    appearance={{
                      elements: {
                        rootBox: "w-full",
                        card: "bg-transparent shadow-none w-full",
                        headerTitle: "text-white",
                        headerSubtitle: "text-gray-300",
                        formButtonPrimary:
                          "bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg py-2",
                      },
                      variables: {
                        colorPrimary: "#6366F1",
                      },
                    }}
                  />
                )}
              </div>

              {/* Toggle link */}
              <div className="text-center mt-4 text-gray-300">
                {showSignUp ? (
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={() => setShowSignUp(false)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      Sign In
                    </button>
                  </p>
                ) : (
                  <p>
                    Don’t have an account?{" "}
                    <button
                      onClick={() => setShowSignUp(true)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      Sign Up
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </SignedOut>

      {/* When signed in → full app */}
      <SignedIn>
        <div className="bg-gray-900 min-h-screen relative">
          <Navbar />
          <div className="absolute top-4 right-4">
            <UserButton afterSignOutUrl="/" />
          </div>
          <NavButton />

          {expense ? <Expense /> : <KhataPage />}

          {isLoading && (
            <div className="absolute h-screen w-screen top-0 right-0 z-10">
              <LoadingPage />
            </div>
          )}

          {openacknowlagebox && <AcknowlageBox />}
        </div>
      </SignedIn>
    </>
  );
};

export default App;
