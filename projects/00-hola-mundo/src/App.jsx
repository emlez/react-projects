
import "./TwitterFollowCard.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

const users = [
  { userName: "emlezdev", name: "Emilio Sánchez", isFollowing: true },
  { userName: "midudev", name: "Miguel Ángel Durán", isFollowing: false },
  { userName: "goncy", name: "Goncy.tsx", isFollowing: true },
  { userName: "freddier", name: "Freddy Vega", isFollowing: false },
]

export function App() {
  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
