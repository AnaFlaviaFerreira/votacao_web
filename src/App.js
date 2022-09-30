import { useEffect, useState } from 'react';
import {
    Button,
    Container,
    Flex,
    Heading,
    useDisclosure,
} from '@chakra-ui/react';
import { api } from './utils/api';
import { Candidate } from './components/Candidate';
import { VotingFormModal } from './components/VotingFormModal';

export function App() {
    const [candidates, setCandidates] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        api.get('/api/candidatos').then(({ data }) => setCandidates(data));
    }, []);

    const onVote = async ({ vote, city, state, age }) => {
        await api.post('/api/usuarios/salvar', {
            voto: vote,
            cidade: city,
            estado: state,
            idade: age,
        });
    };

    return (
        <Container maxW="container.md" py="3">
            <Flex justify="space-between" align="baseline">
                <Heading>Candidatos</Heading>

                <Button colorScheme="blue" onClick={() => onOpen()}>
                    Votar
                </Button>
            </Flex>

            <Flex as="ul" mt={6} direction="column" gap={4} wrap="wrap">
                {candidates.map(candidate => (
                    <Candidate candidate={candidate} key={candidate.id} />
                ))}
            </Flex>

            <VotingFormModal
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={onVote}
            />
        </Container>
    );
}
