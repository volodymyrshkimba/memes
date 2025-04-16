import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Form,
  Input,
} from "@heroui/react";

import {
  imageURLValidation,
  likesValidation,
  titleValidation,
} from "../validation";

const EditMemeModal = ({
  isOpen,
  onClose,
  handleSubmit,
  selectedMeme,
  setSelectedMeme,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
            <Input
              isRequired
              label="Title"
              value={selectedMeme.title}
              onChange={(e) =>
                setSelectedMeme({ ...selectedMeme, title: e.target.value })
              }
              validate={titleValidation}
            />
            <Input
              isRequired
              label="Image URL"
              value={selectedMeme.imageUrl}
              onChange={(e) =>
                setSelectedMeme({
                  ...selectedMeme,
                  imageUrl: e.target.value,
                })
              }
              validate={imageURLValidation}
            />
            <Input
              isRequired
              label="Likes"
              type="number"
              min={0}
              max={99}
              value={selectedMeme.likes}
              onChange={(e) =>
                setSelectedMeme({
                  ...selectedMeme,
                  likes: Number(e.target.value),
                })
              }
              validate={likesValidation}
            />
            <Button variant="light" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditMemeModal;
