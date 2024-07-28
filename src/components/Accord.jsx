import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";

const Accord = ({item}) => {
    // console.log(disp);
  return (
    <>
          {/* <Accordion allowToggle> */}
        <AccordionItem bgColor={"#F5F5F5"} border={"1px"} borderColor={"white"} padding={"6px"} >
          <h2>
            <AccordionButton >
              <Box as="span" flex="1" textAlign="left" fontSize={13}>
                {item}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        {/* </Accordion> */}
        </>
  )
}

export default Accord