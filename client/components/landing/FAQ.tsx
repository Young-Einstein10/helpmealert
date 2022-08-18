import React from "react";
import Wrapper from "components/Wrapper";
import {
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const questionsList = [
  {
    question: "What does Helpme do?",
    answer:
      "When you tweet your emergency to @helpmenaija, the service alerts your registered emergency contacts that you need help and gives them details about your situation.",
  },
  {
    question: "How do I setup my emergency contact?",
    answer:
      "Connect your Twitter account by clicking 'Link Twitter Account' button at the top to setup a profile on the Helpme website, you can then add your friends or followers to your emergency contacts.",
  },
  {
    question: "How many contacts can I add?",
    answer:
      "A maximum of 5 twitter contacts. Keep in mind that the people must be following you on Twitter.",
  },
  {
    question: "How soon would help come after my tweet?",
    answer:
      "Your contacts will be notified after you tweet @helpmenaija. But we'll check in with you again in 5 minutes to see if you've been reached. If not, we'd reach out to your contacts again and publish your tweet so that people in your area could help.",
  },
];

const FAQs = () => {
  return (
    <section id="faqs">
      <Wrapper maxW="4xl">
        <Heading
          textAlign="center"
          fontSize="32px"
          fontWeight={600}
          color="#212026"
          mb="60px"
          maxW={600}
          mx="auto"
        >
          Frequently Asked Questions
        </Heading>

        <Accordion allowToggle>
          {questionsList.map((question, idx) => (
            <AccordionItem key={idx}>
              <h2>
                <AccordionButton py={8}>
                  <Box flex="1" textAlign="left">
                    {question.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{question.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Wrapper>
    </section>
  );
};

export default FAQs;
