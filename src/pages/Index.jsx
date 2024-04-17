// Complete the Index page component for Lonis Hamaili's personal website
import { Box, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr, Image } from "@chakra-ui/react";
import { FaGlobeAmericas } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMb25pcyUyMEhhbWFpbGklMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMzODM2NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lonis Hamaili" mb={4} />
        <Heading as="h1" size="xl">
          Lonis Hamaili
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Economic Analyst
        </Text>
      </Flex>

      <Flex direction="column" align="center" width="100%">
        <Text fontSize="2xl" mb={4}>
          World GDP & Company Value Over Time
        </Text>
        {Array.from({ length: 20 }).map((_, index) => {
          const year = 2024 - index;
          const gdpWidth = 50 + index * 2;
          const companyValueWidth = 60 + index * 1.5;
          return (
            <Box width="90%" bg="gray.200" p={2} mt={2} key={year}>
              <Text>{year}</Text>
              <Flex>
                <Box width={`${gdpWidth}%`} bg="blue.500" p={2} color="white">
                  GDP: {20 + index * 0.5} Trillion USD
                </Box>
                <Box width={`${companyValueWidth}%`} bg="green.500" p={2} color="white">
                  Company Value: {30 + index * 0.8} Trillion USD
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>

      <Flex justify="center" mt={10}>
        <FaGlobeAmericas size="3em" color="#3182CE" />
      </Flex>
    </Box>
  );
};

export default Index;
