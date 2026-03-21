import { Aero, type RouteParams } from 'Deno Router';
const app = new Aero();
type asd = RouteParams<'/users/:id/:a{}/posts'>;
Deno.serve(app.fetch);
let asdd = 1;
