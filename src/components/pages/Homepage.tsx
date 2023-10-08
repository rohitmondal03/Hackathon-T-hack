import { useEffect } from "react";
import { motion } from "framer-motion"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTypes from "split-type";

import { cn } from "@/lib/utils"


export default function Homepage() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const headingElement = document.querySelector(".animated-class")

        // @ts-ignore
        const text = new SplitTypes(headingElement, { types: "words, chars" });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: headingElement,
                start: "top 80%",
                end: "end 10%",
                scrub: true,
                markers: false,
            },
            opacity: 0.2,
            stagger: 0.3,
        });
    }, [])


    return (
        <>
            <section className="my-24 flex items-center gap-x-20">
                <div className="text-left space-y-10">
                    <h1 className="text-4xl font-semibold underline text-sky-500">ByteRecruit</h1>

                    <p className="text-8xl font-extrabold">Elevate your tech <span className="text-amber-500">interviews.</span></p>

                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-xl font-bold">Platform</h1>
                            <p className="text-muted-foreground">Full access to our platform, including all questions and solutions.</p>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold">Community</h1>
                            <p className="text-muted-foreground">Join a community of like-minded individuals, and learn from each other.</p>
                        </div>
                    </div>
                </div>

                <motion.img
                    src="src/assets/interview_2.jpg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, delay: .2 }}
                    className="h-[30rem] cursor-cell rounded-xl transition-all duration-500 ease-in-out hover:shadow-[20px_20px_10px] hover:dark:shadow-zinc-400 hover:-translate-x-1 hover:-translate-y-1"
                />
            </section>

            <section className="my-32 space-y-10">
                <h1 className="text-6xl font-bold text-pink-500 underline">About us</h1>

                <p className={cn("text-7xl dark:text-zinc-200", "animated-class")}>At ByteRecruit, we're passionate about connecting talented developers with exceptional career opportunities. We believe that great companies are built on the foundation of outstanding people, and our mission is to bridge the gap between top-tier tech talent and forward-thinking organizations.</p>
            </section>

            <section className="my-32 flex flex-col items-center justify-center gap-y-16 text-left">
                <h1 className="text-7xl font-bold text-purple-500">Advantages of using our platform -</h1>

                <div>
                    <ul className={cn("advantages_list", "space-y-10")}>
                        <li>
                            <h1>1. Precision making:</h1>
                            <p>"Our AI-powered platform uses advanced algorithms to match developers with job opportunities that align perfectly with their skills, experience, and preferences. This ensures that you find the right talent for your projects quickly and efficiently."</p>
                        </li>

                        <li>
                            <h1>2. Time and Cost Savings:</h1>
                            <p>"Say goodbye to long hours sifting through resumes. Our AI streamlines the recruitment process, reducing both time and costs associated with hiring. We focus on finding the most qualified candidates so you can focus on growing your business."</p>
                        </li>

                        <li>
                            <h1>3. Reduced Bias:</h1>
                            <p>"Our AI-driven approach minimizes unconscious bias in hiring by evaluating candidates solely based on their qualifications and experience. This promotes diversity and inclusivity in your workforce."</p>
                        </li>

                        <li>
                            <h1>4. Predictive Analytics:</h1>
                            <p>"Our AI platform leverages predictive analytics to identify top-performing candidates based on historical data. This helps you make data-driven hiring decisions and improve your team's success rate."</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
