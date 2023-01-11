const DisplayList = (props) => {
    const { list, removeFromList, updateList } = props;
    const [name, setName] = useState("")
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, i) => (
                        <p>
                            {item.name} the {item.noseColor} nosed reindeer. Had a very
                            {item.fur} fur coat
                        </p>
                    )};
                </tbody>
            </table>
        </div>
        );
};

export default DisplayList;