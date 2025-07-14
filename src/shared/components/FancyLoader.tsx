
export const FancyLoader = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Main loader container */}
      <div className="relative h-24 w-24">
        {/* Gradient track */}
        <div className="absolute inset-0 rounded-full border-[6px] border-gray-200"></div>

        {/* Animated gradient spinner */}
        <div
          className="absolute inset-0 rounded-full border-[6px] border-transparent"
          style={{
            background:
              'conic-gradient(transparent,transparent,transparent,#8b5cf6)',
            animation: 'spin 1.5s linear infinite',
          }}
        ></div>

        {/* Gradient overlay for smoother transition */}
        <div
          className="absolute inset-0 rounded-full mix-blend-overlay"
          style={{
            background:
              'conic-gradient(#ec4899,#ec4899 20%,#8b5cf6 40%,#3b82f6 60%,transparent 80%)',
            animation: 'spin 1.5s linear infinite',
          }}
        ></div>

        {/* Inner circle */}
        <div className="absolute inset-6 rounded-full bg-white"></div>

        {/* Center dot */}
        <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#ec4899]"></div>
      </div>
      {/* Tailwind does not support custom keyframes in classnames, so we use inline style for animation */}
      <style>
        {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}
      </style>
    </div>
  );
};
