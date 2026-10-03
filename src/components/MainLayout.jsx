import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="lg:flex min-h-screen bg-darkBlue overflow-x-hidden">
      <Navbar />
      <main className="flex-1 p-4 md:p-6 lg:p-9 lg:ml-32 min-w-0">
        {children}
      </main>
    </div>
  );
}
