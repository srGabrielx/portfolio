import React from 'react';

export function GradientText({
  children,
  className = '',
  colors = ['#ff4500', '#ffaa00', '#00e5ff', '#ffaa00', '#ff4500'],
  animationSpeed = 3.5,
  showBorder = false,
  ...props
}) {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;

  return (
    <span
      className={`relative inline-flex items-center justify-center font-extrabold cursor-default ${className}`}
      {...props}
    >
      {showBorder && (
        <span
          className="absolute inset-0 pointer-events-none animate-gradient rounded-xl"
          style={{
            backgroundImage: gradient,
            backgroundSize: '300% 300%',
            animationDuration: `${animationSpeed}s`,
          }}
        />
      )}
      <span
        className="inline-block relative z-10 text-transparent animate-gradient select-text"
        style={{
          backgroundImage: gradient,
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animationDuration: `${animationSpeed}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default GradientText;
