import { useState } from 'react';
import { Reorder } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const App = () => {

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <div className="bg-[#24cc87] h-screen w-screen overflow-y-auto">
      <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item, index) => (
        <Reorder.Item value={item} key={item}>
        <Card key={index} className="m-8">
          <CardHeader>
            <CardTitle>Item {item}</CardTitle>
          </CardHeader>
          <CardContent>
            Hi my name is Tiffany georgio and people just call me georgio.
          </CardContent>
        </Card>
        </Reorder.Item>
      ))}
      </Reorder.Group>
      

      
    </div>
  )
}

export default App
