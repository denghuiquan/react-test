import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
  Input,
  FormHelperText,
  Checkbox,
  Flex,
  FormLabel,
  Button
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'
import { Center } from '@chakra-ui/react'
function SignIn (props) {
  return (
    <Center mx='25%' minW='20rem'>
      <Stack spacing='4'>
        <FormControl isRequired isDisabled isInvalid>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder='请输入用户名' />
          </InputGroup>
          <FormHelperText>用户名为必填项</FormHelperText>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input placeholder='请输入密码' />
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <Flex>
          <Checkbox defaultChecked id='deal' mr='2' />
          <FormLabel htmlFor='deal'>是否已查阅并同意服务协议</FormLabel>
        </Flex>
        <Button colorScheme='teal' w='100%' _hover={{ bgColor: 'tomato' }}>
          登录
        </Button>
      </Stack>
    </Center>
  )
}

export default observer(SignIn)
