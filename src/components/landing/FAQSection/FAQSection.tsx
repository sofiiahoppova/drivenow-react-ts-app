import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import css from "./FAQSection.module.css";

import questions from "./questions.json";

interface ItemProps extends React.PropsWithChildren {
  header: string;
  key: number;
}

const AccordionItem = ({ header, ...rest }: ItemProps) => (
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
