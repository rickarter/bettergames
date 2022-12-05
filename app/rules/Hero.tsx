import Image from "next/image";
import { DM_Sans } from "@next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: "700" });

export default function Hero() {
    const rules_content = {
        h1: "Follow the rules or you're out!",
		description: [
			{
				text: "Our rules are created with the community around to ensure fairness for all of our players."
			},
			{
				text: "This page documents our Code of Conduct you must follow"	
			},
			{
				text: "Breaking Better Games Rules leads to punishment"
			},
		],
        rules: [
            {
                title: "Overview",
                rule: [
                    {
                        text: "Below are the rules that apply to everyone playing on Better Games."
                    },
                ]
            },
            {
                title: "Gameplay",
                rule: [
                    {
                        text: "Using any unfair advantage, cheat, etc will result in a ban. We do not care if you complain."
                    },
                    {
                        text: "Cross-teaming, encouraging rule-breaking is not allowed."
                    }
                ]
            },
            {
                title: "Inappropriate Content and Cosmetics",
                rule: [
                    {
                        text: "Using inappropriate capes, skins, usernames is forbidden."
                    }
                ]
            },
            {
                title: "Server Bugs",
                rule: [
                    {
                        text: "You can report bugs to our team via Discrod Server."
                    },
                    {
                        text: "Reporting bugs helps us fix and improve the gameplay experience. Please include as much information and detail as possible when reporting issues so that we are able to understand and resolve the issue faster."
                    }
                ]
            },
            {
                title: "Reporting Players",
                rule: [
                    {
                        text: "You can report rule breakers through the #report channel on our discrod server."
                    },
                    {
                        text: "Reporting players helps us provide better quality gameplay exprience for the community. So if you encounter unexpected behaviour we encourage you to report the rule breaker."
                    },
                    {
                        text: "Please provide as much information and detail as possible when reporting someone. Attaching visual proves like screenshots, recordings can help resolve the issue faster."
                    }
                ]
            },
        ],
    }
    return (
        <> 
			<section className="bg-slate-100 flex w-full flex-col py-0 md:py-16">
				<div className="ring-slate-200 ring-offset-2 ring-2 rounded-lg bg-white mx-auto h-full flex flex-col max-w-3xl py-8 space-y-6">
					<div className="flex flex-col justify-center space-y-6 px-16">
						<h1
						className={`${dm.className} rounded-lg bg-blue-100 text-center text-4xl py-4`}
						>
						{rules_content?.h1}
						</h1>
						<div className="flex flex-col justify-center space-y-3">
						{rules_content?.description &&
							rules_content?.description.map((item, i) => (
							<p
								className="text-slate-800 text-lg"
							>
								{item?.text}
							</p>
						))}
						</div>
					</div>
					{rules_content?.rules &&
						rules_content?.rules.map((item, i) => (
						<div className="felx flex-col justify-center space-y-3 px-16">
							<h1 className={`${dm.className} text-4xl`}>
								{item?.title}
							</h1>
							{item?.rule &&
								item?.rule.map((rule, j) => (
								<p
									className="text-slate-800 text-lg"
								>
									{rule?.text}
								</p>
							))}
						</div>
					))}
				</div>
			</section>
        </>
    );
}
