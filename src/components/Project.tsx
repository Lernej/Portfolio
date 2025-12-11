interface Props {
  title: string;
  description: string;
  image: string;
  imageLink: string;
}

const Project = ({ title, description, image, imageLink }: Props) => {
  return (
    <div className="grow-0 shrink-0 bg-gray-900 h-100 w-80 md:h-120 md:w-100 2xl:h-200 2xl:w-180 rounded-3xl text-white flex flex-col gap-5 shadow-2xl">
      <div className="bg-gray-800 flex-1 flex flex-col items-center justify-center rounded-t-xl text-4xl font-medium">
        <div className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent p-2">
          {title}
        </div>
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <a
          href={imageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img className="" src={image} draggable="false"></img>
        </a>
      </div>
      <div className="bg-gray-800 font-thin flex-2 rounded-b-xl text-[12px] md:text-[15px] lg:text-sm 2xl:text-lg text-left flex flex-col justify-center pl-5 pr-5">
        {description}
      </div>
    </div>
  );
};

export default Project;
