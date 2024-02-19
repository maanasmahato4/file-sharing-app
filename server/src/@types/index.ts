export type Sender = {
	id: string;
	sender: string;
	receiver: string;
	fileUrl: string;
};

export type SenderWithOutId = Omit<Sender, 'id'>;
