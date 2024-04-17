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

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th isNumeric>GDP (in trillion USD)</Th>
              <Th isNumeric>Total Public Company Value (in trillion USD)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>USA</Td>
              <Td isNumeric>21.43</Td>
              <Td isNumeric>32.12</Td>
            </Tr>
            <Tr>
              <Td>China</Td>
              <Td isNumeric>14.34</Td>
              <Td isNumeric>10.36</Td>
            </Tr>
            <Tr>
              <Td>Japan</Td>
              <Td isNumeric>5.08</Td>
              <Td isNumeric>6.15</Td>
            </Tr>
            <Tr>
              <Td>Germany</Td>
              <Td isNumeric>3.84</Td>
              <Td isNumeric>2.24</Td>
            </Tr>
            <Tr>
              <Td>India</Td>
              <Td isNumeric>2.87</Td>
              <Td isNumeric>2.53</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Flex justify="center" mt={10}>
        <FaGlobeAmericas size="3em" color="#3182CE" />
      </Flex>
    </Box>
  );
};

export default Index;
