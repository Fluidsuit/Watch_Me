import { useState } from "react";
import FAQCss from './FAQsection.module.css';


const data = [
    {
        question: "What is WatchMe?",
        answer:
            "WatchMe is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
        question: "How much does WatchMe cost?",
        answer:
            "Watch WatchMe on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer:
            "Watch anywhere, anytime. Sign in with your WatchMe account to watch instantly on the web at WatchMe.com from your personal computer or on any internet-connected device that offers the WatchMe app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        question: "How do I cancel?",
        answer:
            "WatchMe is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on WatchMe?",
        answer:"WatchMe has an extensive library of feature films, documentaries, TV shows, anime, award-winning WatchMe originals, and more. Watch"
    }
];

function FAQsection() {
        const [openIndex, setOpenIndex] = useState(null);

        const toggle = (index) => {
            if (openIndex === index) {
                setOpenIndex(null);
            } else {
                setOpenIndex(index);
            }
        };

        return (
            <>
                <div>

                    <h1 className={FAQCss['faq-heading']}>
                        Frequently Asked Questions
                    </h1>

                    <div className="w-auto mx-auto mt-10 space-y-2">
                        {data.map((item, index) => (
                            <div key={index} className={`w-full ${FAQCss['faq-accordion']}`}>
                                <button
                                    onClick={() => toggle(index)}
                                    className={`w-full text-2xl flex justify-between items-center p-3 ${openIndex == index ? "border-b-[2px] border-b-[#000000]" : ""}`}>
                                    <span className="font-medium text-left">{item.question}</span>
                                    <span
                                        className={`text-2xl font-bold transform transition-transform duration-300 ${openIndex === index ? "rotate-45 " : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                                        }  ${FAQCss['faq-answer']}`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </>

        );
    }

export default FAQsection;
