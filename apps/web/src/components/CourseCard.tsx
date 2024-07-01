interface Props {
  imageUrl: string;
  title: string;
  onClick?: () => void;
  ButtonComponent: React.ElementType;
}

export default function CourseCard({
  imageUrl,
  title,
  onClick,
  ButtonComponent,
}: Props) {
  return (
    <div className="relative group">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="m-auto w-5/6 object-cover rounded-lg hover:cursor-pointer p-5 "
        />
      </div>
      <div
        className="w-5/6 m-auto bg-black bg-opacity-50 absolute bottom-0 right-0 left-0 h-0 overflow-hidden 
        group-hover:h-full  transition-all duration-500 flex justify-center items-center   rounded-lg"
      >
        <div>
          <ButtonComponent className=" " onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
