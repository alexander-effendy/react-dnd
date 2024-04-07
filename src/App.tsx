import { useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import AppsIcon from '@mui/icons-material/Apps';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ItemCardProps {
  item: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const dragControls = useDragControls();

  return (
    <Reorder.Item 
    value={item} 
    key={item}
    dragControls={dragControls} 
    dragListener={false}
  >
    <Card 
      className="m-8 h-full"
    >
      <section className="flex justify-between h-full">
        <section className="h-full">
          <CardHeader>
            <CardTitle>Item {item}</CardTitle>
          </CardHeader>

          <CardContent className="">
            Hi my name is Tiffany georgio and people just call me georgio.
          </CardContent>
        </section>
        <div className="justify-center items-center grid place-items-center">
          <AppsIcon onPointerDown={(e) => dragControls.start(e)} className="hover:cursor-pointer mx-5"/>
        </div>
      </section>
    </Card>
    </Reorder.Item>
  )
}

const App = () => {

  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <div className="bg-[#24cc87] h-screen w-screen overflow-y-auto">
      <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item) => (
        <ItemCard key={item} item={item} />
      ))}
      </Reorder.Group>
    </div>
  )
}

export default App
