declare global {
  interface RecordProps {
    accountId: Number;
    name: String;
  }

  type GetSummonerInfo = (name: String) => Promise<ResultType>;
}

export {}