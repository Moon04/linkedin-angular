export class PostComments {
	accountID: number;
	comment: string;
	constructor(accountID, comment) {
		this.accountID = accountID;
		this.comment = comment;
	}
}