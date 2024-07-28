import React, { useContext } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
  } from '@chakra-ui/react'
  import { AuthContext } from '../context/AuthContext';

const LogOut = ({isOpen,onClose}) => {
// console.log(open);
let {toggleLogin} = useContext(AuthContext)
const handleLogOut = () => {
    toggleLogin()
    onClose()
}
function AlertDialogExample() {
  const cancelRef = React.useRef()

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You will be logged out from your account.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => handleLogOut()} ml={3}>
                Log Out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
return <AlertDialogExample />;
}

export default LogOut