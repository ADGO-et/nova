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
    <div className="text-foreground flex flex-col p-12 my-12 gap-8 md:w-[85%] mx-auto">
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
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
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
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
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
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>4</span>
                                <span>How can I watch Nova Stream?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="md:w-[50%]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>5</span>
                                <span>How do I sign up for Nova Stream?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>6</span>
                                <span>What is the Nova Stream free trial?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>7</span>
                                <span>How do I contact Nova Stream customer support?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
                        </AccordionContent>
                    </AccordionItem>
                        <AccordionItem value="item-8">
                        <AccordionTrigger className="text-lg">
                            <div className="flex gap-2 items-start">
                                <span className='bg-foreground text-background px-3 py-1 font-semibold rounded-md'>8</span>
                                <span>What are the Nova Stream payment methods?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Nova Stream is a streaming service that allows you to watch movies and shows on demand.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
  );
};

export default FaqSection;
