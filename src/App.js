import { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Img,
    List,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { api } from './utils/api';
import { VotingForm } from './components/VotingForm';

export function App() {
    const [candidates, setCandidates] = useState([]);

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
        <Box h="100vh" w="100vw" display="grid" placeItems="center">
            <Tabs
                variant="enclosed-colored"
                bg="white"
                minW="container.sm"
                rounded="base"
            >
                <TabList>
                    <Tab>Vote</Tab>
                    <Tab>Results</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading>Candidates</Heading>
                        <List mt={6} spacing={4}>
                            {candidates.map(candidate => (
                                <ListItem
                                    key={candidate.id}
                                    display="flex"
                                    alignItems="center"
                                    gap={4}
                                >
                                    <Img
                                        w="20"
                                        h="20"
                                        objectFit="cover"
                                        objectPosition="top"
                                        rounded="full"
                                        src={candidate.image}
                                        alt={candidate.nome}
                                    />
                                    <Heading size="md">
                                        {candidate.nome}
                                    </Heading>
                                    <Box
                                        w="20"
                                        h="20"
                                        ml="auto"
                                        bg="gray.100"
                                        rounded="md"
                                        display="grid"
                                        placeItems="center"
                                    >
                                        <Heading size="lg">
                                            {candidate.numero}
                                        </Heading>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>

                        <VotingForm onSubmit={onVote} />
                    </TabPanel>
                    <TabPanel>
                        <p>See the results here!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
