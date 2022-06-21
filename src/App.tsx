import { gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface LessonProps {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: LessonProps[] }>(GET_LESSONS_QUERY)
  console.log("data", data)

  return (
      <ul>
        {data?.lessons.map((lesson) => {
          return (
            <li key={lesson.id}>{lesson.title}</li>
          )
        })}
      </ul>
  )
}

export default App
