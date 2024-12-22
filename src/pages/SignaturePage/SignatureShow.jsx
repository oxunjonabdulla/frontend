import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table } from "@chakra-ui/react";
import { Vu_32Show } from "./showTables/VU_32_Show";

export const SignatureShow = ({ isOpen, onClose, data }) => {
    console.log(data);

    function getTable() {
        switch (data?.log_type) {
            case "vu32":
                return <Vu_32Show vNumber={data?.carriage_number_or_id} />
        }
    }
    
    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={["full"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    {data?.log_type} Jurnali
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{ overflow: "auto" }}>
                    <Table
                        borderRadius={10}
                        size={"sm"}
                        whiteSpace={"pre-wrap"}
                        variant={"striped"}
                        overflow={"hidden"}
                        colorScheme="blackAlpha">
                        {getTable()}
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};