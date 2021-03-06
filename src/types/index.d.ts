declare global {
<<<<<<< HEAD
  interface ExampleProps {
    accountId: Number;
    name: String;
    src: string;
=======
  interface BasicSummonerInfo {
    accountId: string,
    id: string,
    name: string,
    profileIconId: number,
    puuid: string,
    revisionDate: number,
    summonerLevel: number,
  }
  
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
    participants: SummonerInfo[];
    platformId: string;
    queueId: number;
    teams: object[];
    tournamentCode: string;
>>>>>>> 4019ebd9841520c6db6bd53abfc0a245946bfa4e
  }

  interface ParticipantInfo {
    "assists": number,
    "baronKills": number,
    "bountyLevel": number,
    "champExperience": number,
    "champLevel": number,
    "championId": number,
    "championName": string,
    "championTransform": number,
    "consumablesPurchased": number,
    "damageDealtToBuildings": number,
    "damageDealtToObjectives": number,
    "damageDealtToTurrets": number,
    "damageSelfMitigated": number,
    "deaths": number,
    "detectorWardsPlaced": number,
    "doubleKills": number,
    "dragonKills": number,
    "firstBloodAssist":boolean,
    "firstBloodKill": boolean,
    "firstTowerAssist": boolean,
    "firstTowerKill": boolean,
    "gameEndedInEarlySurrender": boolean,
    "gameEndedInSurrender": boolean,
    "goldEarned": number,
    "goldSpent": number,
    "individualPosition": string,
    "inhibitorKills": number,
    "inhibitorTakedowns": number,
    "inhibitorsLost": number,
    "item0": number,
    "item1": number,
    "item2": number,
    "item3": number,
    "item4": number,
    "item5": number,
    "item6": number,
    "itemsPurchased": number,
    "killingSprees": number,
    "kills": number,
    "lane": string,
    "largestCriticalStrike": number,
    "largestKillingSpree": number,
    "largestMultiKill": number,
    "longestTimeSpentLiving": number,
    "magicDamageDealt": number,
    "magicDamageDealtToChampions": number,
    "magicDamageTaken": number,
    "neutralMinionsKilled": number,
    "nexusKills": number,
    "nexusLost": number,
    "nexusTakedowns": number,
    "objectivesStolen": number,
    "objectivesStolenAssists": number,
    "participantId": number,
    "pentaKills": number,
    "perks": object,
    "physicalDamageDealt": number,
    "physicalDamageDealtToChampions": number,
    "physicalDamageTaken": number,
    "profileIcon": number,
    "puuid": string,
    "quadraKills": number,
    "riotIdName": string,
    "riotIdTagline": string,
    "role": string,
    "sightWardsBoughtInGame": number,
    "spell1Casts": number,
    "spell2Casts": number,
    "spell3Casts": number,
    "spell4Casts": number,
    "summoner1Casts": number,
    "summoner1Id": number,
    "summoner2Casts": number,
    "summoner2Id": number,
    "summonerId": string,
    "summonerLevel": number,
    "summonerName": string,
    "teamEarlySurrendered": false,
    "teamId": number,
    "teamPosition": "",
    "timeCCingOthers": number,
    "timePlayed": number,
    "totalDamageDealt": number,
    "totalDamageDealtToChampions": number,
    "totalDamageShieldedOnTeammates": number,
    "totalDamageTaken": number,
    "totalHeal": number,
    "totalHealsOnTeammates": number,
    "totalMinionsKilled": number,
    "totalTimeCCDealt": number,
    "totalTimeSpentDead": number,
    "totalUnitsHealed": number,
    "tripleKills": number,
    "trueDamageDealt": number,
    "trueDamageDealtToChampions": number,
    "trueDamageTaken": number,
    "turretKills": number,
    "turretTakedowns": number,
    "turretsLost": number,
    "unrealKills": number,
    "visionScore": number,
    "visionWardsBoughtInGame": number,
    "wardsKilled": number,
    "wardsPlaced": number,
    "win": boolean,
  }
}

export {};
