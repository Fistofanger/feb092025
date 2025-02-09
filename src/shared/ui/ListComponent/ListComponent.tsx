import './ListComponent.css';

type ListComponentProps<T> = {
    data: T[]
    render: (item: T) => JSX.Element
}

const ListComponent = <T,>({data, render}: ListComponentProps<T>): JSX.Element => {
  return (
    <div className='flex '>{data.map(item => render(item))}
    </div>
  );
};

export default ListComponent;
