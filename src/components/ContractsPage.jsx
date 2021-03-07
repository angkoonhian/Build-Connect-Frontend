import React, {useState} from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Heading,
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
  } from "@chakra-ui/react"
  import { v4 as uuidv4 } from "uuid"

const ContractsPage = (props) => {
    const { setScreen } = props
    const handleBackToHome = () => {
        setScreen("LandingPage")
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [companyName, setCompanyName] = useState()
    const [specialisation, setSpecialisation] = useState()
    const [date, setDate] = useState()
    const [budget, setBudget] = useState()
    const [contracts, setContracts] = useState()
    contracts = [
        {companyName: "ABC Company", specialisation: "Elevators", date: "11/01/20 - 12/01/20", budget: 10000}
    ]
    
    const submit = e => {
        const _id = uuidv4();

        const contract = {
            _id,
            companyName,
            specialisation,
            date,
            budget,
        }

        setContracts(contract)

    }

    return (
        <div>
            <Button onClick = {handleBackToHome}>Back to Home</Button>
            <Heading>List of Contracts</Heading>          
           <Table variant="simple">
          <TableCaption>List of active contracts</TableCaption>
          <Thead>
            <Tr>
              <Th>Company Name</Th>
              <Th>Specialisation</Th>
              <Th>Date</Th>
              <Th>Budget($)</Th>
            </Tr>
          </Thead>
          <Tbody>
              {contracts.map((element, id) => {
                  return (
                      <Tr>
                          <Td>{element.companyName}</Td>
                          <Td>{element.specialisation}</Td>
                          <Td>{element.date}</Td>
                          <Td>{element.budget}</Td>
                      </Tr>
                  )
              })}
          </Tbody>
          <Tfoot>
          </Tfoot>
        </Table>
        <Button onClick = {onOpen}>Add Contracts</Button>
        <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired = "true">
              <FormLabel>Company Name</FormLabel>
              <Input placeholder="Company Name..." onChange = {e => setCompanyName(e.target.value)}/>
            </FormControl>

            <FormControl isRequired = "true">
              <FormLabel>Specialisation</FormLabel>
              <Input placeholder="Specialisation..." onChange = {e => setSpecialisation(e.target.value)}/>
            </FormControl>
            <FormControl isRequired = "true">
              <FormLabel>Date</FormLabel>
              <Input placeholder="Date..." onChange = {e => setDate(e.target.value)}/>
            </FormControl>
            <FormControl isRequired = "true">
              <FormLabel>Budget</FormLabel>
              <Input placeholder="Budget..." onChange = {e => setBudget(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick = {submit} colorScheme="blue" mr={3}>
              Add Contract
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )

}

export default ContractsPage