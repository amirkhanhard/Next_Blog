// components/Loader.jsx
export default function Loader() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-70 z-50 spinner">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  