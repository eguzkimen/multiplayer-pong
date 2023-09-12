import { useQuery } from "react-query"

export function GamesListView() {
  const gameStatesQuery = useQuery('gameStates', () =>
    fetch('/api/gameStates').then(res =>
      res.json()
    )
  )

  return <div>
    {!gameStatesQuery.isLoading
      ? <h1>There&apos;s {gameStatesQuery.data?.length} games availble</h1>
      : <h1>Loading games...</h1>
    }

    {gameStatesQuery.data?.map((gameState: any) =>
      <div key={gameState.gameStateId} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
        <div>room name: {gameState.roomName}</div>
        <div>player A: {gameState.playerA}</div>
        <div>player B: {gameState.playerB}</div>
        <button style={{ width: '100px' }}>join room</button>
      </div>
    )}
  </div>
}