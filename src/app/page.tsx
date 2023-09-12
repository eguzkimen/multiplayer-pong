'use client'

import PlayView from './views/PlayView';
import { GamesListView } from './views/GamesListView';

export default function Home() {
  const hasJoinedARoom = false;

  if (hasJoinedARoom) {
    return <PlayView />
  }

  return <GamesListView />
}
