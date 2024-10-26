"use client"; // Ensure this component runs on the client side

import React, { useEffect, useRef } from 'react';

class BackgroundElement {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;

    constructor(x: number, y: number, size: number, speedX: number, speedY: number, opacity: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = opacity;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(105,105,105, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(canvas: HTMLCanvasElement) {
        // Use canvas dimensions for boundary checking
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off canvas edges using the canvas dimensions
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.speedY *= -1;
        }
    }
}

const BackgroundCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const elementsRef = useRef<BackgroundElement[]>([]); // Use a ref for the elements

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            // Set canvas dimensions based on the actual canvas size
            canvas.width = canvas.clientWidth; // You can set this to a fixed value if needed
            canvas.height = canvas.clientHeight; // Same here

            // Create some background elements only once
            for (let i = 0; i < 10; i++) {
                const element = new BackgroundElement(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    Math.random() * 20 + 5,
                    Math.random() * 2 + 1,
                    Math.random() * 2 + 1,
                    Math.random()
                );
                elementsRef.current.push(element); // Store elements in the ref
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                elementsRef.current.forEach((element) => {
                    element.update(canvas); // Pass the canvas to update for boundary checks
                    element.draw(ctx);
                });
                requestAnimationFrame(animate);
            };

            animate();
        }
    }, []); // Run only once on mount

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
    );
};

export default BackgroundCanvas;
