'use client'

import { CSSProperties, useCallback, useEffect, useState } from 'react';
import styles from './page.module.css'

type GameState = {
  ballPositionX: number;
  ballPositionY: number;
  
  playerAPaddlePosition: number;
  playerBPaddlePosition: number;
}

const DEFAULT_GAME_STATE: GameState = {
  ballPositionX: 0,
  ballPositionY: 0,

  playerAPaddlePosition: 0,
  playerBPaddlePosition: 0
}

const BASE_PADDLE_STYLES: CSSProperties = {width: '12px', height: '120px', backgroundColor: 'black'}

export default function Home() {
  const [gameState, setGameState] = useState<GameState>(DEFAULT_GAME_STATE)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setGameState({...gameState, playerAPaddlePosition: gameState.playerAPaddlePosition - 1})
    }
    
    if (e.key === 'ArrowUp') {
      setGameState({...gameState, playerAPaddlePosition: gameState.playerAPaddlePosition + 1})
    }
  }, [gameState])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown])

  return (
    <div style={{display: 'flex', gap: '120px'}}>
      <div style={{...BASE_PADDLE_STYLES, marginTop: gameState.playerAPaddlePosition * 10}}></div>
      <div style={{...BASE_PADDLE_STYLES}}></div>
    </div>
  )
}
