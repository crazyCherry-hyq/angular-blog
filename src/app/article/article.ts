type address = {
  city: string,
  province: string,
  county: string
};

type selectOption = {
  id: string,
  name: string
};

export class ArticleForm {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public title: string,
    public province: string,
    public city: string,
    public county: string,
    public address: string
  ) {}
}
