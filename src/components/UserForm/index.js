import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Image,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Button
} from '@chakra-ui/react'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import logo from '../../assets/images/logo192.png'

function UserForm (props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  return (
    <Box bgColor={bgColor} p={3} w='100%' boxShadow='lg' borderRadius='lg'>
      <Button pos='fixed' right='0' bottom='0' onClick={toggleColorMode}>
        切换{colorMode === 'light' ? '暗色' : '浅色'}模式
      </Button>
      <Text as='h3' my='2' align='center' w='auto' fontSize='xl'>
        <Image w='50px' src={logo} verticalAlign='middle' display='inline' />
        React Chakra UI Demo
      </Text>
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ boxShadow: 'none' }}>注册</Tab>
          <Tab _focus={{ boxShadow: 'none' }}>登录</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <SignIn />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default observer(UserForm)
