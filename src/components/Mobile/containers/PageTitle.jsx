
export const PageTitle = (props) => {
  return (
    <header>
      <h1 className="text-center text-[1.75rem] font-semibold text-gray-900">
        {props.title}
      </h1>
    </header>
  );
};
