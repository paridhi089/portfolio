import replaceUrl from "./replaceUrl";

const downloadResume = () => {
  const fileUrl =
    "https://wdtlrkbrhenouwgibctr.supabase.co/storage/v1/object/public/resume/Resume%20ATS%20Ver%2020260222.pdf";
  window.open(replaceUrl(fileUrl), "_blank");
};

export default downloadResume;
