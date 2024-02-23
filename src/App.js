import './App.css';
import React from "react";
import { Image, Text, VStack, Heading, Button, Box,  Stack, HStack, SimpleGrid,Divider, StackDivider, Container, Link} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/react"
import { Progress } from '@chakra-ui/react'
import { AbsoluteCenter } from '@chakra-ui/react'
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function Profile() {
  return (
    <Box
    backgroundImage="url('https://wallpapercosmos.com/w/full/a/7/e/116685-3840x2160-desktop-4k-firewatch-wallpaper.jpg')"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
   color= "white"
  >
      <VStack spacing={8} align="center">
        <Image
          mt="20"
          borderRadius="half"
          boxSize="220px"
          src="https://i2-prod.mirror.co.uk/incoming/article29490204.ece/ALTERNATES/s1200c/0_Top-pic-template-copy.jpg"
          alt="M16A1"
        />
        <Heading as="h2" size="xl">
      Mark Louis C. Cadiente
        </Heading>
        <Text>First Year College Technical Service Management</Text>
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
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    
    <Container maxW='8xl' bg='white.600'>
    <Flex direction={{ base: 'column', lg: 'row' }} justifyContent='space-between'>
    <Card maxW='lg' marginTop='4' boxShadow='2xl' bg='baby powder.600' height='250px'>
  <CardHeader>
    <Heading size='lg'>About Mark</Heading>
  </CardHeader>
  <CardBody height='200px' overflow='auto'>
    <Stack divider={<StackDivider/>} spacing='1'>
      <Box>
        <Text pt='0' fontSize='sm'>
          I am Yaranaika Kiryu, a Mental Breakdown Specialist. I am a fan of technology, music, and anime. I’m also interested in gaming and studying.
          I am currently Studying Python and Java for my chosen Course. I am also a collector of rare items and a traveler.
        </Text>
        
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
        <Box display={{ base: 'none', lg: 'block' }} width='26px'/>
        <Card marginTop='4' direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxW="850px" height='285px' boxShadow='2xl'>
  <Stack>
    <CardBody height='200px' overflow='auto'>
      <Heading size='md'>Support Mark Louis Cadiente</Heading>
      <Text py='2'>
      Your support is greatly appreciated! Your contributions help keep our work going and make a huge difference. 
      Whether it's a one-time donation or a recurring contribution, every bit helps. 
      Thank you for being a part of our community and for your generous support.
      </Text>
      <Button >
        Support Me!
      </Button>
    </CardBody>
    <CardFooter>
    <Button onClick={toggleColorMode}>
        Click Me! If it is too bright {colorMode === "light"}
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Flex>

<Flex direction={{ base: 'column', lg: 'row' }} justifyContent='space-between'>
      <Flex justifyContent='flex-start'>
        <Card maxW='lg' marginTop='4' boxShadow='2xl'bg='baby powder.600' height='640px'>
          <CardHeader>
            <Heading size='lg'>Gallery</Heading>
          </CardHeader>
          <CardBody>
          <SimpleGrid columns={3} spacing={5}>
  <Box  height='160px'>
    <Image src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/358681464_1303232810312225_1908921387589452808_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHvUL8PynTcrkxdKdLI8JB92cSXwTxOLGzZxJfBPE4sbLqhlKdrgDJJ0CeACAxP4GQrqVNRvvieLezfHN2FiJyf&_nc_ohc=SePls4RiLkMAX_EPWlc&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfDJVSJVlYHL4DSZQpY6GCqnWj0NEOgcr3DPulG7Iqa-Gg&oe=65DC4130" alt="Sample image 1" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1168735097697091737/20231031_101550.jpg?ex=65e68061&is=65d40b61&hm=4dab838f9b011de8fcd1fec958950c5123b7352a0a6787cdb5d5a5f560b2eec4&=&format=webp&width=313&height=676" alt="Sample image 2" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=680" alt="Sample image 3" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://cdn.discordapp.com/attachments/687923095159308426/1209841291370831892/280bed666ef01880e9fd2423f6227a1f_4315930060208472198.png?ex=65e86381&is=65d5ee81&hm=dc5a9fe144f8f6ff44eedcbd5df62f16434cb4aec2c03dbc6c0464344fc8b704&" alt="Sample image 4" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://preview.redd.it/exactly-17-hours-ago-ichiban-kasuga-turned-46-years-old-v0-sd0p16frjf9a1.png?auto=webp&s=860c482da9428f011d591d59df7b255c4ec3b915" alt="Sample image 5" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1207931809053282397/fkgxLXZiWzlSJmZe_zMH4EzWM2sN0hvjfMcQffh6L-bO8csikzvqBCb8G4Cjq1qiPwIiGTfod4RPVgs640-nd-v1.png?ex=65e17129&is=65cefc29&hm=5a52bbee76126ba4f5c4e24d757423b84c18cde1c98d09188505137b3e16c555&=&format=webp&quality=lossless" alt="Sample image 6" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1161931651568373831/20231012_154117.jpg?ex=65e0352d&is=65cdc02d&hm=e85c146f74b696921bc65682d7453494031411ae72c47dbd7644ea9f85a7892f&=&format=webp&width=313&height=676" alt="Sample image 7" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1163164255722422312/image.png?ex=65e4b121&is=65d23c21&hm=0ae3e925a2967db0badf90233af13ae16d9200e63ec0a5fcd4c86b37d89b1fbf&=&format=webp&quality=lossless&width=898&height=676" alt="Sample image 8" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1209336141476663356/rn_image_picker_lib_temp_691e94c4-d810-4b03-bd41-9f850505f993.jpg?ex=65e68d0c&is=65d4180c&hm=cd01bb47ec8849176db3580b84abfce6cc87f48db5f0cbd880468e2e37bcb774&=&format=webp&width=1440&height=666" alt="Sample image 9" boxSize="150px" />
  </Box>
</SimpleGrid>
          </CardBody>
        </Card>
      </Flex>

<Card marginTop='4' direction={{ base: 'column', sm: 'row' }}maxW="850px" height='1600px' backgroundColor='transparent' outline='none' boxShadow='none'>

  <Stack>
    <CardBody height='200px' overflow='auto'>
        <Card marginTop='4' direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxW="850px" height='510px' boxShadow='2xl'>
  <Stack>
    <CardBody height='200px' overflow='auto'>
      <Heading size='lg'>More About Mark</Heading>
      <Text py='2'>
        Currently Studying at Tarlac State University San Isidro Extension Campus, Currently taking up Bachelor of Science in 
        Information Technology Major in Technical Service Management. Also Currently Studying Python and Java for my chosen Course.
        As of now I am currently a 1st Year Student. So I am still new at some areas of my course.
        <CardHeader>
    <Heading size='md'>Links</Heading>
  </CardHeader>

  <CardBody>-
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Github
        </Heading>
    
        <Link> https://github.com/YaranaikaKiryu <ExternalLinkIcon mx="2px" /></Link>
      
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Youtube
        </Heading>
        <Link>
          https://www.youtube.com/@markiplier
          <ExternalLinkIcon mx="2px" /></Link>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Facebook
        </Heading>
        <Link>
        https://www.facebook.com/marklouis.cadiente
        <ExternalLinkIcon mx="2px" /></Link>
      </Box>
    </Stack>
  </CardBody>
      </Text>
    </CardBody>
  </Stack>
</Card>

<Card marginTop='4' overflow='hidden' variant='outline' maxW="950px" height='950px' boxShadow='2xl'>
  <Stack>
    <CardBody height='200px' overflow='auto'>
      <Heading size='lg'>My Skills And Education</Heading>
      <Text py='2'>
  <Divider orientation='horizontal' />
  LANGUAGE
  <Stack spacing={5}>
    <Progress colorScheme='green' height='32px' value={50} width='100%' />
  </Stack>
</Text>
<Text py='2'>
  <Divider orientation='horizontal' />
  PROGRAMMING SKILLS
  <Stack spacing={5}>
    <Progress colorScheme='green' height='32px' value={53} width='100%' />
  </Stack>
  <Divider orientation='horizontal' />
</Text>
<Text py='2'>
  <Divider orientation='horizontal' />
  COMMUNICATION SKILLS
  <Stack spacing={5}>
    <Progress colorScheme='green' height='32px' value={52} width='100%' />
  </Stack>
  <Divider orientation='horizontal' />
</Text>
<Divider orientation='horizontal' />
<Text py='2'>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter>
   <Text size='lg'>MORE SKILLS</Text> 
  </AbsoluteCenter>
</Box>
<UnorderedList>
  <ListItem>Can Work Under pressure</ListItem>
  <ListItem>Can Collaborate with others if nessesary</ListItem>
  <ListItem>Fast Learner</ListItem>
  <ListItem>Can Solve Problems with Ease</ListItem>
</UnorderedList>
<Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter>
   <Text size='lg'>EDUCATION</Text> 
  </AbsoluteCenter>
</Box>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>SCHOOLS ATTENDED, STARTED AND GRADUATED YEAR</TableCaption>
    <Thead>
      <Tr>
        <Th>SCHOOL ATTENDED</Th>
        <Th>YEAR STARTED</Th>
        <Th>YEAR GRADUATED</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>FYAS and Don Bosco Tarlac (Elementary)</Td>
        <Td>2011</Td>
        <Td>2017</Td>
      </Tr>
      <Tr>
        <Td>Don Bosco Technical Institute Junior High School</Td>
        <Td>2017</Td>
        <Td>2021</Td>
      </Tr>
      <Tr>
        <Td>Don Bosco Technical Institute Senior High School</Td>
        <Td>2021</Td>
        <Td>2023</Td>
      </Tr>
    </Tbody>
    <Tfoot>
    </Tfoot>
  </Table>
</TableContainer>
  {/*     <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  /> */}
    </CardBody>
  </Stack>
</Card>
    </CardBody>
  </Stack>
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

