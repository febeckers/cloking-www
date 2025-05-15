import React, { useState, useEffect, useRef } from 'react';
import { Shield, Bot } from 'lucide-react';

const BotCounter: React.FC = () => {
  const [botCount, setBotCount] = useState(0);
  const [data, setData] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Generate initial history data
    const initialData = Array.from({ length: 10 }, () => 
      Math.floor(Math.random() * (3500 - 2000 + 1)) + 2000
    );
    const initialCount = initialData[initialData.length - 1];
    
    setBotCount(initialCount);
    setData(initialData);

    // Update count every 20 seconds
    const interval = setInterval(() => {
      setBotCount(prev => {
        const increment = Math.floor(Math.random() * 50) + 10;
        const newCount = prev + increment;
        setData(currentData => [...currentData.slice(-30), newCount]);
        return newCount;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match display size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (data.length < 2) return;

    // Draw graph
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 3;
    ctx.beginPath();

    const step = rect.width / (data.length - 1);
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const scale = rect.height / (maxValue - minValue);

    data.forEach((value, index) => {
      const x = index * step;
      const y = rect.height - (value - minValue) * scale;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Add gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

    ctx.fillStyle = gradient;
    ctx.lineTo(rect.width, rect.height);
    ctx.lineTo(0, rect.height);
    ctx.fill();
  }, [data]);

  return (
    <div className="mt-12 p-8 bg-purple-50 rounded-xl border-2 border-purple-200">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <Bot className="h-8 w-8 text-purple-600" />
          <h3 className="text-2xl font-bold text-purple-900">
            Bots Bloqueados na Última Hora
          </h3>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Shield className="h-6 w-6 text-purple-600" />
          <span className="text-3xl font-bold text-purple-700">
            {botCount.toLocaleString()}
          </span>
          <span className="text-purple-600">acessos bloqueados</span>
        </div>

        <div className="relative w-full h-48">
          <canvas 
            ref={canvasRef}
            className="w-full h-full"
          />
        </div>

        <p className="text-center text-xl font-bold text-red-800">
          O pior? Você nem percebe isso até o prejuízo chegar.
        </p>
      </div>
    </div>
  );
};

export default BotCounter;