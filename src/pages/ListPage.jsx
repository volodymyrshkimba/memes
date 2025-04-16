import { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@heroui/react";

import { getMemesFromLs } from "../utils/getMemesFormLs";

export default function ListPage() {
  const [memes] = useState(getMemesFromLs);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {memes.map((meme) => (
        <Card key={meme.id} className="w-full">
          <CardHeader className="p-0 w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src={meme.imageUrl}
              alt={meme.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardBody>
            <h3 className="text-xl font-semibold">{meme.title}</h3>
            <p className="text-gray-500"> {meme.likes} likes</p>
          </CardBody>
          <CardFooter>
            <Link href={meme.imageUrl} target="_blank" underline="hover">
              Go to meme
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
