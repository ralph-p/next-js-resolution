import { Card, CardBody, CardHeader, Heading, VStack, Text, Td, HStack, Switch, Table, Tr, Tbody, Modal, useDisclosure, IconButton, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Task, TaskNote } from '../hooks/useTask.hooks';
import moment from "moment"
import { AddInput } from './AddInput';
import { getCardTheme } from '../utils/task.utils';
import { HamburgerIcon } from '@chakra-ui/icons';
import { TaskModal } from './TaskModal';
type Props = {
  task: Task;
  addNote: (taskId: string, note: string) => void;
  updateTask: (active: boolean) => void
}

export const TaskCard = ({ task, addNote, updateTask }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const submitNote = (note: string) => addNote(task.id, note)
  const lastUpdated = () => {
    const duration = moment.duration(task.lastUpdated, 'minutes')
    if (duration.days() > 0) {
      return `Updated: ${duration.days()}d ${duration.hours()}h ago`
    }
    if (duration.hours() > 0) {
      return `Updated: ${duration.hours()}h ${duration.minutes()}m ago`
    }
    return `Updated: ${duration.minutes()}m ago`
  }
  const { cardColor } = getCardTheme(task.lastUpdated)


  return (
    <Card key={`${task.name}-`} backgroundColor={cardColor} width="100%">
      <CardHeader paddingBottom={'1'}>
        <HStack justifyContent={'space-between'}>
          <Heading size="md" color="blackAlpha.800">
            {task.name}
          </Heading>
          <Text color="blackAlpha.700">
            <IconButton 
              aria-label={'open-task-modal'} 
              size='sm' 
              icon={<HamburgerIcon />} 
              variant='ghost'
              colorScheme='teal' 
              border='0px'
              onClick={onOpen}
            />
          </Text>
        </HStack>
      </CardHeader>
      <CardBody>
        <Text color="gray.900">{lastUpdated()}</Text>
        <AddInput callBack={submitNote} placeholder={`${task.name} note`} />
      </CardBody>
      <TaskModal isOpen={isOpen} onClose={onClose} task={task} updateTask={updateTask}/>

    </Card>
  )
}

