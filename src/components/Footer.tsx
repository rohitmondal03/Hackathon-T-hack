import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/theme-components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";


export default function Footer() {
    const [compClass, setCompClass] = useState<string>("");

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY < window.innerHeight) {
                setCompClass("opacity-0 scale-0");
            }
            else {
                setCompClass("opacity-1 scale-1");
            }
        }

        // Add event listener for the scroll event
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer
            className={`${compClass} fixed py-2 px-5 rounded-full bottom-[12px] left-1/2 -translate-x-1/2 flex flex-row items-center justify-around gap-x-12 border-2 border-zinc-700 dark:border-white duration-500 transition-all backdrop-blur-2xl
            `}
        >
            <div>
                <Tooltip>
                    <TooltipTrigger>
                        <Link to={`/`}>
                            ByteRecruit
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-zinc-800">
                        <p>Home Page</p>
                    </TooltipContent>
                </Tooltip>
            </div>

            <div className="flex flex-row items-center justify-between gap-2">
                <ModeToggle />
                <Button>Sign In</Button>
            </div>
        </footer>
    )
}