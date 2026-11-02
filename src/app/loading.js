export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent overflow-hidden pointer-events-none">
      <div className="h-full bg-[#D07578] w-full route-loading-bar shadow-[0_0_8px_rgba(208,117,120,0.8)]" />
    </div>
  );
}
