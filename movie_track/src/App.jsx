import './index.css';
import { Button } from './components/ui/button';
import { ArrowUpRightIcon } from "lucide-react"
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from './components/ui/card';
import {ButtonSize} from './buttons';

const movies = [
  { id: 1, title: "Inception", year: 2010, director: "Nolan" },
  { id: 2, title: "Interstellar", year: 2014, director: "Nolan" },
  { id: 3, title: "The Matrix", year: 1999, director: "Wachowski" },
]

export default function App() {
  return (
    <>
    <div className="grid grid-cols-3 gap-4 p-8">
      {movies.map(movie => (
        <Card key={movie.id}>
          <CardHeader>
            <CardTitle>{movie.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{movie.year} • {movie.director}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <ButtonSize />
    </>
  )
}