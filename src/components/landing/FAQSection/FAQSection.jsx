import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import css from "./FAQSection.module.css";

const questions = [
  {
    id: 1,
    header: "How can I rent a car on DriveNow?",
    answer:
      "Simply select your desired dates, choose a car from the available options, and complete your booking online — it only takes a few minutes.",
  },
  {
    id: 2,
    header: "Do I need to pay a deposit?",
    answer:
      "If you choose a plan without Full Coverage, a refundable deposit is required. For Full Coverage bookings, no deposit is needed.",
  },
  {
    id: 3,
    header: "What documents do I need to rent a car?",
    answer:
      "You`ll need a valid driver`s license, a passport or ID card, and a credit or debit card in your name.",
  },
  {
    id: 4,
    header: "Is insurance included in the price?",
    answer:
      "Yes, basic insurance is included in all rentals. You can also upgrade to Full Coverage for complete protection during your trip.",
  },
  {
    id: 5,
    header: "Can I cancel or change my booking?",
    answer:
      "Yes, you can modify or cancel your reservation for free up to 24 hours before the rental period starts.",
  },
  {
    id: 6,
    header: "Do you offer delivery or pickup service?",
    answer:
      "Yes, we can deliver the car to your chosen location or arrange pickup at our nearest station — just select this option during booking.",
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <svg className={css.chevron} width={15} height={24}>
          <use href="/sprite.svg#icon-chevron-down"></use>
        </svg>
      </>
    }
    className={css.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${css.itemBtn} ${isEnter && css.itemBtnExpanded}`,
    }}
    contentProps={{ className: css.itemContent }}
    panelProps={{ className: css.itemPanel }}
  />
);

const FAQSection = () => {
  return (
    <section className={css.container}>
      <h2>Frequently asked Questions</h2>
      <Accordion className={css.accordion} transition transitionTimeout={300}>
        {questions.map((question) => (
          <AccordionItem key={question.id} header={question.header}>
            {question.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
