import Image from "next/image";
import { DM_Sans } from "@next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: "700" });

export default function Hero() {
    const rules_content = {
        h1: "What are the rules?",
        rules: [
            {
                title: "Overview",
                rule: "Better Games rules are based around common sense and fairness. This page documents the most common rules"
            }
        ],
    }
    return (
        <> 
            <p>I'm gonna have rules here</p>
        </>
    );
}