import HeadArea from "@/components/HeadArea";
import FaqDropdown from "@/components/FaqDropdown";
import React from "react";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";

export default function FAQ(){


/**const FAQPage = () => {
    const faqs = [
      {
        question: 'What is a Sqwee Well?',
        answer: 'A squirrel that values healthy living physically and mentally.',
      },
      {
        question: 'How do I add a friend?',
        answer: 'In the profile page there is a section labeled friends.',
      },
    ];**/

    return(
        <>
          <HeadArea
            title="FAQ"
          />
          <MenuBack/>
          <h4>Frequently Asked Questions</h4>
          <Navbar/>
        </>
    )
  }
//}