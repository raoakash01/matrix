import React, { useEffect, useRef } from 'react';

const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const letters = '01000001 01101011 01100001 01110011 01101000'.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    setInterval(draw, 33);

    // Cleanup function to avoid memory leaks
    return () => clearInterval(draw);
  }, []);

  return (
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
  );
};

export default MatrixEffect;
