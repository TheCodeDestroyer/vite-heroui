import { useState } from "react";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
} from "@heroui/react";

export default function IndexPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-xl mt-10">
      <div className="flex justify-center">
        <Button onPress={() => setIsOpen(true)}>Open</Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-4">
              <Input type="text" label="Name" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
