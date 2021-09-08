declare global {
  interface GameInfo {
    gameCreation: number;
    gameDuration: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: object[];
    platformId: string;
    queueId: number;
    teams: object[];
    tournamentCode: string;
  }
}

export {}