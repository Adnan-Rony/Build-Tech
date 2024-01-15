import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const According = () => {
    return (
        <div className='my-10'id='FAQ'>
            <div className='py-10'>
                <p className='text-center text-4xl font-bold'>frequently asked question</p>
            </div>
            {/* <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What parts do I need to build a PC?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li>Central Processing Unit (CPU)</li>
                        <li>Graphics Processing Unit (GPU)</li>
                        <li>Motherboard</li>
                        <li>Memory (RAM)</li>
                        <li>Storage.</li>
                        <li>System cooling.</li>
                        <li>Power Supply Unit (PSU)</li>
                        <li>Gaming peripherals</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How easy is it to build a PC?
                </div>
                <div className="collapse-content">
                    <p>Is it hard to build a computer by yourself? Building a computer is surprisingly easy. You'll only need a few tools, a good level of understanding of the parts, and the ability to follow some simple instructions. If you can build ready-to-assemble furniture, you'll be able to build your own PC!</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How much RAM do I need?
                </div>
                <div className="collapse-content">
                    <p>Generally, we recommend 8GB of RAM for casual computer usage and internet browsing, 16GB for spreadsheets and other office programs, and at least 32GB for gamers and multimedia creators.</p>
                </div>
            </div> */}
            <Accordion className='rounded-2xl '>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What parts do I need to build a PC?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ol>
                        <li>Central Processing Unit (CPU)</li>
                        <li>Graphics Processing Unit (GPU)</li>
                        <li>Motherboard</li>
                        <li>Memory (RAM)</li>
                        <li>Storage.</li>
                        <li>System cooling.</li>
                        <li>Power Supply Unit (PSU)</li>
                        <li>Gaming peripherals</li>
                    </ol>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How easy is it to build a PC?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Is it hard to build a computer by yourself? Building a computer is surprisingly easy. You'll only need a few tools, a good level of understanding of the parts, and the ability to follow some simple instructions. If you can build ready-to-assemble furniture, you'll be able to build your own PC!</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How much RAM do I need?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Generally, we recommend 8GB of RAM for casual computer usage and internet browsing, 16GB for spreadsheets and other office programs, and at least 32GB for gamers and multimedia creators.</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
};

export default According;