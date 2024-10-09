export default function Loading() {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-blue-500 opacity-30"></div>
      </div>
    </div>
  );
}
