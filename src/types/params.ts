export type RouteParams<T extends string> =
	T extends `${infer Segment}/${infer Rest}`
		? SegmentParam<Segment> | RouteParams<Rest>
		: SegmentParam<T>;

type SegmentParam<T extends string> = T extends `:${infer Param}{${string}}`
	? Param
	: T extends `:${infer Param}`
		? Param
		: never;
