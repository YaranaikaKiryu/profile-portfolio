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
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1177600317207089162/377284017_1297810257580153_6686563186799435815_n.png?ex=66227042&is=660ffb42&hm=439bf912ec2d25bb2067a2b18111e21975d67046a244f08a03b973c78d2281f9&=&format=webp&quality=lossless&width=901&height=676" alt="Sample image 1" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://images-ext-1.discordapp.net/external/NMEbY6W_Vp8ppQ98RYsOH57NyXWtjEBdIijfe7SjKf8/%3Furl%3Dhttps%253A%252F%252Ftr.rbxcdn.com%252F84476f3ec772872f6e1c4751dea5bd2a%252F420%252F420%252FImage%252FPng%26backup%3Dhttps%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcQvRcYgwrgq9bn6uFcseT7_p-Cigjj8Z4YuNVG9p8M8aRGqPfWknWrXaepA2iUBCj5mWAA%2526usqp%253DCAU/https/proxy.notsobot.com/google-images?format=webp" alt="Sample image 2" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=680" alt="Sample image 3" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1177848662865490010/20231125_134948.jpg?ex=6623578c&is=6610e28c&hm=42ddf7c95f2b16008715c051d9da8828f1d8ffe4b7246ac590739bd0f67293dd&=&format=webp&width=380&height=676" alt="Sample image 4" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1177907511744008202/F_uClHhbMAAOCMe.png?ex=66238e5b&is=6611195b&hm=5aac35c5bb4495f85068d7622b4cd8a6c8dfebbe8b76a2f3972509b0bd3fade3&=&format=webp&quality=lossless&width=350&height=350" alt="Sample image 5" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1178313395385143356/RDT_20231126_1503242402877107830640370.jpg?ex=6625085d&is=6612935d&hm=502f5f5beadbbe24907fa019d96ae4e2a7416a453f438616028c261cb2b29330&=&format=webp&width=476&height=350" alt="Sample image 6" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1178402998607687750/image.png?ex=66255bd0&is=6612e6d0&hm=b860f25e69ae54cd449199b4249432b459bd5886740e50f5a3b4e50d4ba6517b&=&format=webp&quality=lossless&width=356&height=350" alt="Sample image 7" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1178620843178340372/FB_IMG_1701027771341.jpg?ex=662626b2&is=6613b1b2&hm=c09097b5c485c7e080f51d799bc00b98c3081b416c26a5c52966e43e683f32fd&=&format=webp" alt="Sample image 8" boxSize="150px" />
  </Box>
  <Box  height='160px'>
    <Image src="https://media.discordapp.net/attachments/687923095159308426/1178959184226701372/FB_IMG_1701078619063.jpg?ex=661e274d&is=660bb24d&hm=6ff454b92598f723a80239543c0624ad0bb45f03aca78b416926ff347aed767e&=&format=webp" alt="Sample image 9" boxSize="150px" />
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
  <CardBody>
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
        https://www.facebook.com/Error404UserNotFound
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

