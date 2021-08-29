declare global {
  export type GetSummonerInfo = (name: String) => Promise<ResultType>;
}