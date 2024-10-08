export type ScrapeType =
    | 'kylegloss5'
    | 'hashtag'
    | 'trend'
    | 'music'
    | 'discover_user'
    | 'discover_hashtag'
    | 'discover_music'
    | 'single_user'
    | 'single_hashtag'
    | 'signature'
    | 'video_meta';

export interface Options {
    proxy?: string;
    event?: boolean;
    by_user_id?: boolean;
    download?: boolean;
    asyncDownload?: number;
    asyncScraping?: number;
    filepath?: string;
    filetype?: string;
    progress?: boolean;
    number?: number;
    userAgent?: string;
    noWaterMark?: boolean;
}
export interface TikTokConstructor {
    download: boolean;
    filepath: string;
    filetype: string;
    proxy: string;
    asyncDownload: number;
    asyncScraping: number;
    cli?: boolean;
    event?: boolean;
    progress?: boolean;
    input: string;
    number: number;
    type: ScrapeType;
    by_user_id?: boolean;
    store_history?: boolean;
    userAgent: string;
    test?: boolean;
    noWaterMark?: boolean;
}

export interface Hashtags {
    id: string;
    name: string;
    title: string;
    cover: string[];
}

export interface PostCollector {
    id: string;
    text: string;
    createTime: number;
    authorId: string;
    authorName: string;
    authorFollowing: number;
    authorFans: number;
    authorHeart: number;
    authorVideo: number;
    authorDigg: number;
    authorVerified: boolean;
    authorPrivate: boolean;
    authorSignature: string;
    musicId: string;
    musicName: string;
    musicAuthor: string;
    musicOriginal: boolean;
    imageUrl: string;
    videoUrl: string;
    videoUrlNoWaterMark: string;
    diggCount: number;
    shareCount: number;
    playCount: number;
    commentCount: number;
    hashtags: Hashtags[];
    repeated?: boolean;
    downloaded: boolean;
}

export interface Result {
    collector: PostCollector[];
    zip?: string;
    json?: string;
    csv?: string;
}
