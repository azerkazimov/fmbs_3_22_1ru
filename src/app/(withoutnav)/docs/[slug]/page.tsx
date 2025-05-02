import parametr from "./style.module.scss";

interface DinamicPageProps {
  params: {
    slug: string;
  };
}

export default function DinamicPage({ params }: DinamicPageProps) {
  const { slug } = params;
  return (
    <div className={parametr.container}>
      <div className={parametr.wrapper}>
        <div className={parametr.greeting}>
          <h1 className={parametr.header}>{slug}</h1>
          <p className={parametr.content}>This is dinamic page</p>
        </div>
      </div>
    </div>
  );
}
