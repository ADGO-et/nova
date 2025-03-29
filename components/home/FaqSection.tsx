import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const FaqSection = () => {
  return (
    <div id="faq" className="text-foreground flex flex-col p-12 my-12 gap-8 md:w-[85%] mx-auto">
        <div className='flex justify-between'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl md:text-4xl'>Frequently Asked Questions</h1>
                <p className="text-sm">Got questions? We have got answers! Check out our FAQ section to find answers to the most common questions about Nova Stream.</p>
            </div>
            <Button className='bg-foreground text-background items-end justify-end'>Ask a Question</Button>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[50%]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>1</span>
                                <span>What is Nova Stream?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova is a comprehensive streaming platform that empowers broadcasters with innovative tools for seamless streaming, audience engagement, and revenue growth.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>2</span>
                                <span>How much does Nova Stream cost?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        Nova offers two pricing plans:
                        A.Basic Plan: $499/month, including unlimited viewers, 1-month show storage, and 2TB of storage.
                        B.Business Plan: $799/month, including all Basic features, 3-month show storage, 5TB of storage, and clearer video quality.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>3</span>
                                <span>What content is available on Nova Stream?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova Stream supports a wide range of content, including TV shows, radio programs, and personal creations. Whether it is media company broadcasts or individual productions, Nova is designed to handle diverse streaming needs seamlessly
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="md:w-[50%]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>4</span>
                                <span>How do I sign up for Nova Stream?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        You can sign up directly through our website or reach out to us for personalized assistance with the registration process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>5</span>
                                <span>How do I contact Nova Stream customer support?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        You can reach Nova&apos; customer support team through the following numbers:
                            +251 916 584 401 or
                            +251 912 841 695 or
                            +251 912 343 660 or
                            +251 912 646 315
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>6</span>
                                <span>How can I watch Nova Stream?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        You can access Nova Stream on all electronic devices, including smartphones, laptops, and tablets, ensuring a seamless viewing experience anytime, anywhere.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
  );
};

export default FaqSection;
