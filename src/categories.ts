// カテゴリの定義と、記事の振り分けをまとめたファイルです。
// 新しい記事を追加したら、POST_CATEGORY に1行足してください。
// 書き忘れても DEFAULT_CATEGORY に入るので、表示が崩れることはありません。

export type CategorySlug = 'okiniiri' | 'karada' | 'yukiguni';

export const CATEGORIES: { slug: CategorySlug; name: string; description: string }[] = [
	{
		slug: 'okiniiri',
		name: '暮らしのお気に入り',
		description: '買ってよかったもの、長く使っているもの、読んだ本のこと。',
	},
	{
		slug: 'karada',
		name: 'からだのこと',
		description: '40代のダイエットや健康管理で、実際に試したこと。',
	},
	{
		slug: 'yukiguni',
		name: '雪国ぐらし',
		description: '青森での暮らしと、季節ごとのできごと。',
	},
];

export const DEFAULT_CATEGORY: CategorySlug = 'okiniiri';

export const POST_CATEGORY: Record<string, CategorySlug> = {
	// 暮らしのお気に入り
	'2026-07-19-workman-higasa-review': 'okiniiri',
	'2022-07-30-solshade-higasa-kouka': 'okiniiri',
	'2026-07-10-muji-circulator': 'okiniiri',
	'2022-11-05-daikinn-seramuhi-to-2020': 'okiniiri',
	'2022-12-19-hunter-rainboots': 'okiniiri',
	'2022-07-13-kindle-paperwhite': 'okiniiri',
	'2022-10-08-book-sodatigaiihito': 'okiniiri',
	'2022-10-22-book-banananomiryoku': 'okiniiri',

	// からだのこと
	'2025-10-09-protein-diet': 'karada',
	'2026-07-27-apple-watch-se3-kenkou': 'karada',
	'2022-06-27-aitaisoseikei-infield': 'karada',
	'2022-09-10-cleansingshampoo': 'karada',

	// 雪国ぐらし
	'2022-10-15-kiritannpomaturi-2022': 'yukiguni',
	'2025-09-12-yukiguni-summer': 'yukiguni',
	'2022-08-13-artist-goma-tenn': 'yukiguni',
};

export function getCategorySlug(id: string): CategorySlug {
	return POST_CATEGORY[id] ?? DEFAULT_CATEGORY;
}
