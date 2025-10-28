import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ponmo?",
    answer: "Ponmo, also known as cowhide or kanda, is the skin of a cow that has been processed and prepared for cooking. It's a popular delicacy in Nigerian cuisine, known for its unique texture and ability to absorb flavors."
  },
  {
    question: "How do I prepare ponmo for cooking?",
    answer: "Our ponmo comes pre-cleaned and ready to cook. Simply rinse it, cut to your desired size, and add it to your soup, stew, or sauce. It typically takes 20-30 minutes to cook until tender."
  },
  {
    question: "What's the difference between small and big ponmo?",
    answer: "Small ponmo pieces are perfect for quick cooking and soups, while big ponmo pieces are ideal for those who prefer larger portions or want to cut them to their preferred size. Both are of the same premium quality."
  },
  {
    question: "How should I store my ponmo?",
    answer: "Store ponmo in the refrigerator for up to 5 days or freeze it for up to 3 months. Make sure it's properly sealed to maintain freshness. Thaw frozen ponmo in the refrigerator before use."
  },
  {
    question: "Do you deliver? What are the delivery charges?",
    answer: "Yes, we deliver nationwide. Delivery charges vary by location. Contact us via WhatsApp for specific delivery information for your area. Same-day delivery is available for orders placed before 2 PM in Abuja."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
