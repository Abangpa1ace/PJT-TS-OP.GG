declare global {
  export interface RecordProps {
    accountId: Number;
    name: String;
  }

  export type GetSummonerInfo = (name: String) => Promise<ResultType>;
}