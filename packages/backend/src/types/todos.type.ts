// TODO: Put a real types here

export type TodoType = {
	id: number;
	title: string;
	description?: string | null;
	done: boolean;
	private: boolean;
	userId: number;
};
