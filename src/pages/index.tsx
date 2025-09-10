import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Tabs,
  Tab,
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
            <Tabs>
              <Tab key="1" title="Tab 1">
                <div>Tab 1 content</div>
              </Tab>
              <Tab key="2" title="Tab 2">
                <div>Tab 2 content</div>
              </Tab>
              <Tab key="3" title="Tab 3">
                <div>Tab 3 content</div>
              </Tab>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
