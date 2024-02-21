import './App.css';
import React from "react";
import { Image, Text, VStack, Heading, Button, Box,  Stack, HStack, SimpleGrid,Divider, StackDivider,ButtonGroup, Container, Input } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

function Profile() {
  return (
    <Box
    backgroundImage="url('https://i.redd.it/o7gcthh450q11.png')"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
   color= "white"
  >

      <VStack spacing={8} align="center">
        <Image
          mt="20"
          borderRadius="half"
          boxSize="200px"
          src="https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.18169-9/21740321_1407186486067287_2409406893115347629_n.png?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHV2nr-O9UxN6IQZ5IaBPs402knAQzTCsDTaScBDNMKwDfOvQ78ZWGMPdhHcVOJiEZLF2Pix8ibdxiHNnzFCkob&_nc_ohc=-X_3QkZCQ_IAX8xOuo3&_nc_ht=scontent.fcrk2-1.fna&oh=00_AfAycvhcPIdQ8di0NITa-9EBWgGGCW0sOcKXdhyIvQ2PCQ&oe=65EF0C7F"
          alt="M16A1"
        
        />
        <Heading as="h2" size="xl">
      [PLACE HOLDER]
        </Heading>
        <Text>Mental Breakdown Specialist</Text>
        <Text>
        What did the ocean said to the beach? Nothing it just waved. Want some Ginger Ale?
        </Text>
        <HStack spacing={4}>

  {['sm'].map((size) => (
    <Tag size={size} key={size} variant='solid' colorScheme='teal'>
      Margareth Thacther
    </Tag>
  ))}

    {['sm'].map((size) => (
    <Tag size={size} key={size} variant='solid' colorScheme='red'>
      Ichiban Kasuga
    </Tag>
  ))}
    {['sm'].map((size) => (
    <Tag size={size} key={size} variant='solid' colorScheme='blue'>
      Mental Breakdown Specialist
    </Tag>
  ))}
    {['sm'].map((size) => (
    <Tag size={size} key={size} variant='solid' colorScheme='gray'>
      Yaranaika Kiryu
    </Tag>
  ))}
    {['sm'].map((size) => (
    <Tag size={size} key={size} variant='solid' colorScheme='purple'>
      Zarraga Homes 
    </Tag>
  ))}
</HStack>
<Divider />
      </VStack>
      </Box>
      
  );
}

function Contents() {
  return (
    <Container maxW='8xl' bg='white.600'>
    <Flex direction={{ base: 'column', lg: 'row' }} justifyContent='space-between'>
      <Card maxW='lg' marginTop='4' boxShadow='2xl' bg='baby powder.600' height='230px'>
  <CardHeader>
    <Heading size='lg'>About</Heading>
  </CardHeader>
  <CardBody height='200px' overflow='auto'>
            <Stack divider={<StackDivider />} spacing='1'>
              <Box>
                <Text pt='1' fontSize='sm'>
                  Quasars, the single most powerful objects in existence - so powerful that they can devour a galaxy.
                </Text >
                <HStack spacing={5} mt={3}>
                  {['sm'].map((size) => ( 
                    <Tag size={size} key={size} variant='solid' colorScheme='teal'>
                      Music
                    </Tag>
                  ))}
                  {['sm'].map((size) => (
                    <Tag size={size} key={size} variant='solid' colorScheme='red'>
                      Anime
                    </Tag>
                  ))}
                  {['sm'].map((size) => (
                    <Tag size={size} key={size} variant='solid' colorScheme='blue'>
                      Gaming
                    </Tag>
                  ))}
                  {['sm'].map((size) => (
                    <Tag size={size} key={size} variant='solid' colorScheme='gray'>
                      Studying
                    </Tag>
                  ))}
                  {['sm'].map((size) => (
                    <Tag size={size} key={size} variant='solid' colorScheme='purple'>
                      Collector
                    </Tag>
                  ))}
                      {['sm'].map((size) => (
                    <Tag size={size} key={size} variant='solid' colorScheme='purple'>
                      Traveler
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Box display={{ base: 'none', lg: 'block' }} width='26px' />

        <Card marginTop='4' direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxW="850px" height='250px' boxShadow='2xl'>
  <Stack>
    <CardBody height='200px' overflow='auto'>
      <Heading size='md'>Support Yaranaika Kiryu</Heading>
      <Text py='2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

</Flex>




      <Flex justifyContent='flex-start'>
        <Card maxW='lg' marginTop='4' boxShadow='2xl'bg='baby powder.600'>
          <CardHeader>
            <Heading size='lg'>Gallery</Heading>
          </CardHeader>
          <CardBody>
          <SimpleGrid columns={3} spacing={5}>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 1" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 2" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 3" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 4" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 5" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 6" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 7" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 8" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://via.placeholder.com/150" alt="Sample image 9" boxSize="150px" />
  </Box>
</SimpleGrid>
          </CardBody>
        </Card>
      </Flex>
      
    </Container>
        
      );
    }

    function App() {
      return (
        <div>
          <Profile />
          <Contents />
        </div>
      );
    }

    export default App;

