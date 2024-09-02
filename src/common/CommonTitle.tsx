const CommonTitle = ({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) => {
  return (
    <div className="text-center space-y-2">
      <h1 className="uppercase text-baseColor font-semibold tracking-widest">
        {title}
      </h1>
      <p className="font-bold text-4xl">
        {description} <span className="text-baseColor">{subTitle}</span>
      </p>
    </div>
  );
};

export default CommonTitle;
