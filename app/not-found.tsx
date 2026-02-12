export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black text-[#16324f]">404</h1>
        <p className="text-gray-600">페이지를 찾을 수 없습니다.</p>
      </div>
    </main>
  );
}
