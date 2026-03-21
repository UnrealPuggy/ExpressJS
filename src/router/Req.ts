export class Req {
	raw: Request;
	constructor(raw: Request) {
		this.raw = raw;
	}
	async text() {
		return await this.raw.text();
	}
	async json<T>() {
		return (await this.raw.json()) as T;
	}
	async arrayBuffer() {
		return await this.raw.arrayBuffer();
	}
}
