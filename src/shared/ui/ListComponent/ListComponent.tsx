type ListComponentProps<T> = {
  data: T[];
  render: (item: T) => JSX.Element;
};

const ListComponent = <T,>({
  data,
  render,
}: ListComponentProps<T>): JSX.Element => {
  return <>{data.map((item) => render(item))}</>;
};

export default ListComponent;
