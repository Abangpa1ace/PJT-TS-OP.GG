declare global {
  interface ExampleProps {
    accountId: Number;
    name: String;
  }

  type GetSummonerInfo = (name: String) => Promise<ResultType>;
}

export {}