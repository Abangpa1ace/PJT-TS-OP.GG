declare global {
  interface ExampleProps {
    accountId: Number;
    name: String;
    src: string;
  }

  type GetSummonerInfo = (name: String) => Promise<ResultType>;
}

export {};
