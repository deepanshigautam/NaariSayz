'use client'

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

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off canvas edges
        if (this.x + this.size > window.innerWidth || this.x - this.size < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.size > window.innerHeight || this.y - this.size < 0) {
            this.speedY *= -1;
        }
    }
}

const BackgroundCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const elements: BackgroundElement[] = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            // Create some background elements
            for (let i = 0; i < 10; i++) {
                const element = new BackgroundElement(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight,
                    Math.random() * 20 + 5,
                    Math.random() * 2 + 1,
                    Math.random() * 2 + 1,
                    Math.random()
                );
                elements.push(element);
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                elements.forEach((element) => {
                    element.update();
                    element.draw(ctx);
                });
                requestAnimationFrame(animate);
            };

            animate();
        }
    }, [canvasRef]);

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'absolute', top: 0, left: 0 }}
        />
    );
};

export default BackgroundCanvas;
