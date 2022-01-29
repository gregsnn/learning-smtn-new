// Record
const obj1: Record<string, string | number> = {
  name: 'John',
  sobrenome: 'Doe',
  idade: 30,
};
// console.log(obj1);

type PessoaProtocol = {
  name?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaPartial>;
// Pick
type PessoaPick = Pick<PessoaReadonly, 'name' | 'sobrenome'>;

const obj2: PessoaPick = {
  name: 'John',
  sobrenome: 'Doe',
};

// console.log(obj2);

// Extract y Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  lastName: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdasdas-asdasdasd',
  name: 'John',
  lastName: 'Doe',
  age: 30,
};

function mapAccount(account: AccountMongo): AccountApi {
  return {
    id: account._id,
    name: account.name,
    lastName: account.lastName,
    age: account.age,
  };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
