type VotationOptions = { option: string; votes: 0 };

export class Voting {
  private _votationOptions: VotationOptions[] = [];
  constructor(public details: string) {}

  addOption(option: VotationOptions): void {
    this._votationOptions.push(option);
  }
  vote(optionIndex: number): void {
    if (!this._votationOptions[optionIndex]) return;

    this._votationOptions[optionIndex].votes++;
  }

  get votationOptions(): VotationOptions[] {
    return this._votationOptions;
  }
}

export class VoteApp {
  private votings: Voting[] = [];

  addOption(voting: Voting): void {
    this.votings.push(voting);
  }

  showVotes(): void {
    for (const vote of this.votings) {
      console.log(vote.details);
      for (const voteOption of vote.votationOptions) {
        console.log(`${voteOption.option}: ${voteOption.votes}`);
      }
      console.log('\n');
    }
  }
}

const votationL = new Voting('Qual a sua Linguagem de Programção Favorita?');
votationL.addOption({ option: 'JavaScript', votes: 0 });
votationL.addOption({ option: 'TypeScript', votes: 0 });
votationL.addOption({ option: 'Java', votes: 0 });
votationL.vote(1);
votationL.vote(1);
votationL.vote(0);

const votationC = new Voting('Qual a sua Cor Favorita?');
votationC.addOption({ option: 'Vermelho', votes: 0 });
votationC.addOption({ option: 'Verde', votes: 0 });
votationC.addOption({ option: 'Azul', votes: 0 });
votationC.vote(2);
votationC.vote(2);
votationC.vote(2);

const voteApp = new VoteApp();
voteApp.addOption(votationL);
voteApp.addOption(votationC);

voteApp.showVotes();
