function replaceUrl(blockedUrl) {
    if (!blockedUrl) return "";

    return blockedUrl.replace(
        "https://wdtlrkbrhenouwgibctr.supabase.co",
        "https://portfolio-28c.pages.dev/supabase"
    );
}

export default replaceUrl;