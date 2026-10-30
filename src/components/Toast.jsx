
function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      aria-live="polite"
      role="status"
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-[#23332d] px-6 py-3 text-sm text-white shadow-xl"
    >
      {message}
    </div>
  );
}

export default Toast;
