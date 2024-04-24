import anime from "animejs";
import { motion, } from "framer-motion"
import { useEffect } from "react";

const WaterDropGrid = () => {
    return (
        <div className="absolute grid place-content-center w-[100px] h-[100px]   px-4 py-8">
            <DotGrid />
        </div>
    );
};

const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;

const DotGrid = () => {

    const animateDot = () => {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        console.log("Random number:", randomNumber);

        anime({
            targets: ".dot-point",
            scale: [
                { value: 1.35, easing: "easeOutSine", duration: 250 },
                { value: 1, easing: "easeInOutQuad", duration: 500 },
            ],
            translateY: [
                { value: -15, easing: "easeOutSine", duration: 250 },
                { value: 0, easing: "easeInOutQuad", duration: 500 },
            ],
            opacity: [
                { value: 1, easing: "easeOutSine", duration: 250 },
                { value: 0.5, easing: "easeInOutQuad", duration: 500 },
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: randomNumber
            }),
        });
    };

    useEffect(() => {
        animateDot();

        const interval = setInterval(animateDot, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair rounded-full p-[3px] transition-colors hover:bg-slate-600"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-[5px] w-[5px] rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <motion.div

            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
        >
            {dots}
        </motion.div>
    );
};

export default WaterDropGrid;