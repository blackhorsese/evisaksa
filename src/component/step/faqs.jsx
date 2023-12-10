import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function FAQ() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <>
    <div className="md:py-20 py-10 overflow-hidden mx-auto justify-center items-center px-5">
      <h1 className="justify-center md:text-center max-w-screen-lg items-center mx-auto md:py-10 py-5 md:text-5xl text-3xl text-[#dfc660]">FAQs</h1>
      <div className="text-black max-w-screen-lg mx-auto items-center">
        <Fragment>
          <Accordion open={open === 2} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(2)}>
              Can I trust you with my money?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              We take protective measures against errors and malicious acts. For every incoming order, we provide a PGP-signed letter of guarantee that confirms the obligations we assume.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(3)}>
              How much does it cost?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              The commission is randomized to some extent and can be 4-5% + 0.0007 BTC (network fee).
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(4)}>
              Don't you think this commission is way too high?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              The innovative cleansing process we use involves considerable expenses, but we believe the resulting premium anonymization level is worth the price.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(5)}>
              How long does it take to cleanse Bitcoins?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              The process starts after the first confirmation of your incoming transfer and takes up to 24, 48 hours. The exact delay is chosen randomly in order to resist deanonymization attempts.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(6)}>
              Why don't you let the customer choose the cleansing time?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              We are concerned that some customers will tend to set dangerously short delays. We have found that a random delay of up to 48 hours is enough to eliminate the risk of volume analysis.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 7} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(7)}>
              What is the minimum amount of funds for cleansing?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              0.25 BTC
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 8} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(8)}>
              What is the maximum amount of funds for cleansing?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              50 BTC per one request. Larger transfers would be too vulnerable to volume analysis, although nothing stops you from placing multiple orders.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 9} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(9)}>
              50 BTC? How can you prove you are in control of such funds?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              We aren't, but that does not prevent us from processing orders even of this size. The funds are attracted from investors as needed.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 10} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(10)}>
              What happens if I send less money than required?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              Amounts lower than the minimum will be treated as donations, since it makes no business sense to cleanse or even return them. You can try contacting our support so they check if anything can be done in your case.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 11} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(11)}>
              How long do addresses for coin transfer remain valid?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              They remain valid for 24 days. This period is sufficient to address any network issues, delays and human errors that may occur, thus guaranteeing safety of customer's assets.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 12} animate={customAnimation}>
            <AccordionHeader className="text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-2" onClick={() => handleOpen(12)}>
              Why can't I choose the percentage breakdown for funds between my output addresses?
            </AccordionHeader>
            <AccordionBody className="text-base font-normal py-2">
              This breakdown must be decided by the cleansing algorithm, for the sake of optimal performance and anonymity.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
    </>
  );
}