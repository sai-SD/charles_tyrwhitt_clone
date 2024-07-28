import React, {useState} from "react";
import {Menu, MenuButton, MenuList, MenuItem, Button, FormControl, FormErrorMessage, Box} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

const Dropdown = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isTouched, setIsTouched] = useState(false);

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsTouched(false);
    };

    const handleSubmit = () => {
        if (!selectedItem) {
            setIsTouched(true);
        } 
    };

    return (
        <FormControl isInvalid={isTouched && !selectedItem}>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg="white"
                    border="1px solid grey"
                    borderRadius="0px"
                    width="42%"
                    height="50px"
                >
                    {selectedItem ? selectedItem : "CHOOSE A TITLE"}
                </MenuButton>
                <MenuList
                    bg="white"
                    border="1px solid grey"
                    maxHeight="300px"
                    overflowY="auto"
                    borderRadius="0px"
                >
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("MR")}>
                        MR
                    </MenuItem>
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("MRS")}>
                        MRS
                    </MenuItem>
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("MS")}>
                        MS
                    </MenuItem>
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("MISS")}>
                        MISS
                    </MenuItem>
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("DOCTOR")}>
                        DOCTOR
                    </MenuItem>
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("OTHER")}>
                        OTHER
                    </MenuItem>
                    <MenuItem borderColor="gray.200" height ="50px" color="black" onClick={() => handleSelect("RATHER NOT SAY")}>
                        RATHER NOT SAY
                    </MenuItem>
                </MenuList>
            </Menu>
            <FormErrorMessage>This field is required.</FormErrorMessage>
            {/* <Box mt={4}>
                <Button onClick={handleSubmit}>Submit</Button>
            </Box> */}
        </FormControl>
    );
};

export default Dropdown;
