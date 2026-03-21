import { Req } from './Req.ts';

export class Context<Params extends Record<string, string>> {
	req: Req;
	params: Params;
	headers: Headers = new Headers();
	resInit: ResponseInit = { status: 200, headers: this.headers };
	constructor(req: Request, params: Params) {
		this.req = new Req(req);
		this.params = params;
	}
	status(stat: number) {
		this.resInit.status = stat;
	}
	header(name: string, value: string) {
		this.headers.set(name, value);
		return this;
	}
	text(body: string) {
		return new Response(body, this.resInit);
	}

	json(body: unknown) {
		this.header('Content-Type', 'application/json');
		return new Response(JSON.stringify(body), this.resInit);
	}
}
