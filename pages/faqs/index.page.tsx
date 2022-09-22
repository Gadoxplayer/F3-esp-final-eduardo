import { Box } from "@mui/material";
import { faqsData } from "dh-marvel/components/faqs/faqsData";
import Faqs from "dh-marvel/components/faqs/faqs";

const FaqsPage = () => {
  return (
    <Box>
      {faqsData.map((faq) => (
        <Faqs key={faq.id} questions={faq.question} answers={faq.answer} />
      ))}
    </Box>
  );
};
export default FaqsPage;