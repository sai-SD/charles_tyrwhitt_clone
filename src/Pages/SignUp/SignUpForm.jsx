import React, {useContext, useState} from "react";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import {
    Heading,
    Text,
    Box,
    Grid,
    ChakraProvider,
    FormControl,
    Button,
    Input,
    InputGroup,
    Checkbox,
    FormErrorMessage,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useBreakpointValue,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";
import {ChevronDownIcon} from "@chakra-ui/icons";
import Guarantee from "../images/Guarantee.svg";
import Security from "../images/Security.svg";

const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /[0-9]/;
    const hasUpper = /[A-Z]/;
    const hasLower = /[a-z]/;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) return "Password must be at least 8 characters long.";
    if (!hasNumber.test(password)) return "Password must contain at least 1 number.";
    if (!hasUpper.test(password)) return "Password must contain at least 1 uppercase letter.";
    if (!hasLower.test(password)) return "Password must contain at least 1 lowercase letter.";
    if (!hasSpecial.test(password)) return "Password must contain at least 1 special character.";
    return "";
};

const SignUpForm = () => {
    const navigate = useNavigate()
    let {toggleLogin,setName} = useContext(AuthContext)
    const [error,setError] = useState("")
    const [user, setUser] = useState({
        fname:'',
        lname:'',
        email: '',
        password: ''
      })
    
      const handleChange = (e) => {
          setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
        

      async function postData() {
        let uFound = 0
        const res = await fetch("http://localhost:3000/signup")
        const users = await res.json()
        for(let existingUser of users){
            if(existingUser.email === user.email){
                uFound = 1
                break
            }
        }
        if(uFound == 1){
            setError("Email already exist")
            return
        }

        let postRes = await fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        let data = await postRes.json()
        // console.log(data);
        setError('')
        setName(user.fname)
        toggleLogin()
        navigate('/')
    }
    // const nav = useNavigate()
    const [selectedItem, setSelectedItem] = useState(null);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsTouched(false);
    };

    const handleSubmit = () => {
        const passwordError = validatePassword(password);

        if (!selectedItem || passwordError) {
            setIsTouched(true);
            setPasswordError(passwordError);
        } else {
            // alert(`Selected: ${selectedItem}`);
            postData()
        }
    };

    const handlePasswordChange = (value) => {
        setUser({
            ...user,
            password: value
        });
        setPassword(value);
        setPasswordError(validatePassword(value));
    };

    const isStacked = useBreakpointValue({base: true, md: false});

    return (
        <div className="main-div check">
            <ChakraProvider>
                <Grid templateColumns={isStacked ? "1fr" : "55% 45%"} gap={10} p={2}>
                    <Box ml={isStacked ? "0" : "26.5%"} className="check1" width={isStacked ? "100%" : "80%"}>
                        <Heading marginBottom="5%" color="rgb(0, 31, 73)" fontSize="24px">
                            Create account
                        </Heading>
                        <span>Title</span>
                        <br />
                        <FormControl isInvalid={isTouched && !selectedItem}>
                            <FormErrorMessage>This field is required.</FormErrorMessage>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                    bg="white"
                                    border="1px solid grey"
                                    borderRadius="0px"
                                    width="42%"
                                    height="50px"
                                    mt="3%"
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
                                    {["MR", "MRS", "MS", "MISS", "DOCTOR", "OTHER", "RATHER NOT SAY"].map((title) => (
                                        <MenuItem
                                            key={title}
                                            borderColor="gray.200"
                                            height="50px"
                                            color="black"
                                            onClick={() => handleSelect(title)}
                                        >
                                            {title}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </FormControl>
                        <br />
                        <div>
                            <span>First Name</span>
                            <br />
                            <Input
                                border="solid 1.5px rgb(87, 84, 84)"
                                marginTop="20px"
                                marginBottom="20px"
                                height="55px"
                                borderRadius="1px"
                                _hover={{}}
                                name="fname"
                                required
                                value={user.firstname} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <span>Last Name</span>
                            <br />
                            <Input
                                border="solid 1.5px rgb(87, 84, 84)"
                                marginTop="20px"
                                marginBottom="20px"
                                height="55px"
                                borderRadius="1px"
                                _hover={{}}
                                name="lname"
                                value={user.lastname} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <span>Email Address</span>
                            <br />
                            <Input
                                border="solid 1.5px rgb(87, 84, 84)"
                                marginTop="20px"
                                marginBottom="20px"
                                height="55px"
                                borderRadius="1px"
                                _hover={{}}
                                name="email"
                                required
                                value={user.email} onChange={handleChange}
                            />
                            {error && <div id="span1">{error}</div>}
                        </div>
                        <div>
                            <span>Password</span>
                            <br />
                            <Text fontSize="sm">
                                Your password must be at least 8 characters in length, and contain at least: 1 number, 1
                                upper case letter, 1 lower case letter, 1 special character.
                            </Text>
                            <FormControl isInvalid={passwordError}>
                                <InputGroup size="md">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        border="solid 1.5px rgb(87, 84, 84)"
                                        marginTop="20px"
                                        marginBottom="1%"
                                        height="55px"
                                        width="100%"
                                        borderRadius="1px"
                                        name="password"
                                        value={password}
                                        onChange={(e) => handlePasswordChange(e.target.value)}
                                        borderColor={passwordError ? "red.500" : "rgb(0, 31, 73)"}
                                    />
                                </InputGroup>
                                <Checkbox
                                    mt={1}
                                    mb={5}
                                    isChecked={showPassword}
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                >
                                    Show
                                </Checkbox>
                                {passwordError && <FormErrorMessage>{passwordError}</FormErrorMessage>}
                            </FormControl>
                        </div>
                        <div>
                            <span>Phone</span>
                            <Text fontSize="sm" mt={0.5}>
                                We'll only use this to contact you about your order or to send you SMS about your
                                delivery
                            </Text>
                            <Input
                                border="solid 1.5px rgb(87, 84, 84)"
                                marginTop="20px"
                                marginBottom="20px"
                                height="55px"
                                borderRadius="1px"
                                _hover={{}}
                            />
                            <Checkbox style={{width:"100%",fontWeight:"500"}}>Emails about offers and our exciting new ranges.</Checkbox>
                            <Checkbox style={{width:"100%",fontWeight:"500"}}>
                                If you'd prefer not to receive mail from selected companies, please check this box.
                            </Checkbox>
                        </div>
                        <Text fontSize="xs">
                            By creating an account with Charles Tyrwhitt, you confirm that you have read and accept our
                            Terms and Conditions and See privacy policy
                        </Text>
                        <Button
                            className="submit-btn"
                            height="50px"
                            colorScheme="rgb(71,89,102)"
                            borderRadius="3px"
                            width="100%"
                            _hover={{bg: "#5a6065"}}
                            onClick={handleSubmit}
                        >
                            CREATE AN ACCOUNT
                        </Button>
                    </Box>
                    <Box
                        className="check"
                        height={isStacked ? "auto" : "50%"}
                        marginRight={isStacked ? "0" : "39%"}
                        ml={isStacked ? "0" : "10%"}
                    >
                        <Box
                            display="flex"
                            marginTop="10px"
                            bg="rgb(247,247, 247)"
                            marginBottom="5%"
                            border="solid 1px rgb(180, 176, 176)"
                            w="100%"
                            p={4}
                            color="white"
                        >
                            <Box className="check" width="20%">
                                <img src={Guarantee} alt="" width="400%" />
                            </Box>
                            <Box className="check1" mr="0px">
                                <Text className="size-clr" fontSize="lg" mb="-11%" mt={0}>
                                    6 MONTHS GUARANTEE
                                </Text>
                                <Text color="rgb(0, 31, 73)" fontSize="12px" marginTop="34px">
                                    Exchange or return your purchase up to 6 months after receipt
                                </Text>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            bg="rgb(247,247, 247)"
                            marginBottom="12%"
                            border="solid 1px rgb(180, 176, 176)"
                            w="100%"
                            p={4}
                            color="white"
                        >
                            <Box className="check" width="20%">
                                <img src={Security} alt="" width="400%" />
                            </Box>
                            <Box className="check1" mr="0px">
                                <Text className="size-clr" fontSize="lg" mb="-11%" mt={0}>
                                    100% SECURE
                                </Text>
                                <Text color="rgb(0, 31, 73)" fontSize="12px">
                                    Shopping is secure with Charles Tyrwhitt
                                </Text>
                            </Box>
                        </Box>
                        <div>
                            <Heading size="sm">HAVE AN ACCOUNT ?</Heading>
                        </div>
                        <Button
                            className="submit-btn"
                            width="100%"
                            height="50px"
                            colorScheme="rgb(71,89,102)"
                            borderRadius="3px"
                            _hover={{bg: "#5a6065"}}
                            onClick={() => navigate('/login')}
                        >
                            CLICK HERE TO LOGIN
                        </Button>
                    </Box>
                </Grid>
            </ChakraProvider>
        </div>
    );
};

export default SignUpForm;
