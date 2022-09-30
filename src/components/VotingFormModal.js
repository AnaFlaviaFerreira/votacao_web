import { useState } from 'react';
import {
    Button,
    Flex,
    Input,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';

export function VotingFormModal({ isOpen, onClose, onSubmit }) {
    const [vote, setVote] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [age, setAge] = useState('');

    const _onSubmit = async () => {
        await onSubmit({
            vote,
            city,
            state,
            age,
        });
        setVote('');
        setCity('');
        setState('');
        setAge('');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={_onSubmit}>
                <ModalHeader>Votação</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction="column" gap="3">
                        <FormControl>
                            <FormLabel>Idade</FormLabel>
                            <NumberInput
                                max={100}
                                min={18}
                                type="number"
                                placeholder="Ex: 18"
                                value={age}
                                onChange={value => setAge(value)}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Cidade</FormLabel>
                            <Input
                                type="text"
                                placeholder="Ex: Ribeirão Preto"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Estado</FormLabel>
                            <Input
                                type="text"
                                placeholder="Ex: São Paulo"
                                value={state}
                                onChange={e => setState(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Voto</FormLabel>
                            <Input
                                type="number"
                                placeholder="Ex: 18"
                                value={vote}
                                onChange={e => setVote(e.target.value)}
                            />
                        </FormControl>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button w="full" type="submit" colorScheme="blue" mt="5">
                        Votar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
