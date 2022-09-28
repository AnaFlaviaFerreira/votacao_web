import { useState } from 'react';
import {
    Button,
    Flex,
    Heading,
    HStack,
    PinInput,
    PinInputField,
} from '@chakra-ui/react';

export function VotingForm({ onSubmit }) {
    const [vote, setVote] = useState('');

    const _onSubmit = e => {
        e.preventDefault();
        onSubmit(vote);
        setVote('');
    };

    return (
        <Flex as="form" direction="column" gap="3" onSubmit={_onSubmit}>
            <Heading>Vote</Heading>

            <HStack>
                <PinInput value={vote} onChange={value => setVote(value)}>
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <Button type="submit" colorScheme="blue" mt="5">
                Vote
            </Button>
        </Flex>
    );
}
