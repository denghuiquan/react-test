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
  RadioGroup,
  Radio,
  Select,
  Flex,
  Switch,
  FormLabel,
  Button
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'
import { Center } from '@chakra-ui/react'
function SignUp (props) {
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
        <RadioGroup defaultValue='0'>
          <Stack spacing='4' direction='row'>
            <Radio value='0'>男</Radio>
            <Radio value='1'>女</Radio>
          </Stack>
        </RadioGroup>
        <Select placeholder='请选择学科'>
          <option value='Java'>Java</option>
          <option value='大前端'>大前端</option>
        </Select>
        <Flex>
          <Switch id='deal' mr='2' />
          <FormLabel htmlFor='deal'>是否已查阅并同意服务协议</FormLabel>
        </Flex>
        <Button colorScheme='teal' w='100%' _hover={{ bgColor: 'tomato' }}>
          注册
        </Button>
      </Stack>
    </Center>
  )
}

export default observer(SignUp)
