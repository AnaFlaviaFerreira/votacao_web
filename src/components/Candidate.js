import {
    Box,
    Container,
    Flex,
    Heading,
    Img,
    Progress,
    Text,
} from '@chakra-ui/react';

export const Candidate = ({ candidate }) => (
    <Flex key={candidate.id} as="li" gap={4} alignItems="center">
        <Img
            minW="20"
            h="20"
            objectFit="cover"
            objectPosition="top"
            rounded="full"
            src={candidate.imagem}
            alt={candidate.nome}
        />
        <Container mx="initial">
            <Heading size="md">{candidate.nome}</Heading>
            <Flex align="center" gap={4}>
                <Progress
                    flex="1"
                    value={(candidate.quantidade * 100) / candidate.total_votos}
                />
                <Text fontWeight="bold">
                    {(
                        (candidate.quantidade * 100) /
                        candidate.total_votos
                    ).toFixed(2)}{' '}
                    %
                </Text>
            </Flex>
        </Container>
        <Box
            w="16"
            h="16"
            ml="auto"
            bg="gray.100"
            rounded="md"
            display="grid"
            placeItems="center"
        >
            <Heading size="md">{candidate.numero}</Heading>
        </Box>
    </Flex>
);
