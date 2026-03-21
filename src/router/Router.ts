export class Aero {
	// handler: Deno.ServeHandler = async (req) => {};
	handler(req: Request) {
		return new Response(null, { status: 404 });
	}
	get fetch(): Deno.ServeHandler {
		return this.handler.bind(this);
	}
}
