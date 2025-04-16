import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
} from "@heroui/react";

import EditMemeModal from "../components/EditMemeModal";

import { LOCAL_KEY } from "../constants";
import { getMemesFromLs } from "../utils/getMemesFormLs";

export default function TablePage() {
  const [memes, setMemes] = useState(getMemesFromLs);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = (meme) => {
    setSelectedMeme(meme);
    onOpen();
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(memes));
  }, [memes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMemes((prev) =>
      prev.map((meme) => (meme.id === selectedMeme.id ? selectedMeme : meme))
    );
    onClose();
  };

  return (
    <div className="p-4">
      <Table isStriped aria-label="Meme table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.title}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => handleEdit(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedMeme && (
        <EditMemeModal
          isOpen={isOpen}
          onOpen={onOpen}
          handleSubmit={handleSubmit}
          selectedMeme={selectedMeme}
          setSelectedMeme={setSelectedMeme}
        />
      )}
    </div>
  );
}
